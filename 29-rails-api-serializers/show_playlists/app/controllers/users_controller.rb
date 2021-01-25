class UsersController < ApplicationController

  def index 
    users = User.all

    # render :index #HTML
    render json: users
  end 
  
  def show 
    user = User.find(params[:id])
    
    # render :show #HTML
    render json: user
  end
end
