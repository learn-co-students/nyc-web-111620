class SessionsController < ApplicationController

  def reset_page_visits
    # cookies[:page_visits] = nil
    session.delete(:page_visits)
    
    redirect_back fallback_location: movies_path
  end 
  
  def logout 
    session.delete(:user_id)
    
    redirect_to new_user_path
  end 

  def new 
    render :new
  end 

  def create 
    user = User.find_by(user_name: params[:session][:user_name])

    if user && user.authenticate(params[:session][:password]) 
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:error] = "Password or Username incorrect"
      redirect_to new_session_path 
    end 
  end 
end
