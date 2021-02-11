class UsersController < ApplicationController
  before_action :authenticate, only: [:show, :update]

  # POST /login
  def login
    # TODO: get the username and password from the params
    # lookup a user with their username and password
    # if they gave the right info, return that user object
    # otherwise, return some error message

    # stub (fake auth)
    render json: User.first
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

end
