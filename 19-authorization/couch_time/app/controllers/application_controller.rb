class ApplicationController < ActionController::Base
  # before_action :find_current_user
  before_action :authorized?

  def find_current_user
    @current_user = User.find_by(id: session[:user_id])
  end 

  def authorized? 
    # code unless condition
    redirect_to new_user_path unless find_current_user
  end 
end
