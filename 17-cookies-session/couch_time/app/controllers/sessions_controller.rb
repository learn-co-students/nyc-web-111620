class SessionsController < ApplicationController

  def reset_page_visits
    # cookies[:page_visits] = nil
    session.delete(:page_visits)

    redirect_back fallback_location: movies_path
  end 

end
