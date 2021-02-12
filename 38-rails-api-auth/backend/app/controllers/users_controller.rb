class UsersController < ApplicationController
  before_action :authenticate, only: [:show, :update]

  # POST /login
  def login
    # lookup a user with their username and password
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # if they gave the right info, return that user object
      token = JWT.encode({ user_id: user.id }, 'mysecret', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }
    else
      # otherwise, return some error message
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  # POST /signup
  def signup
    # create a user in the backend
    user = User.create(user_params)
    if user.valid?
      # if the user is created successfully, send back the user
      token = JWT.encode({ user_id: user.id }, 'mysecret', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }
    else
      # otherwise, send back an error
      render json: { errors: user.errors.full_messages }, status: :unauthorized
    end
  end

  # GET /me
  # authenticate
  def show

    # stub (fake auth)
    render json: @current_user
  end

  # PATCH /me
  # authenticate
  def update
    # user_params = params.permit(:bio, :image)
    # user.update(user_params)
    @current_user.update(bio: params[:bio], image: params[:image])

    render json: @current_user
  end

  # def create
  #   @current_user.photos.create(img_url: params[:img_url])
  # end

  private
  
  def user_params
    params.permit(:username, :bio, :password, :image)
  end

end
