class WatchListsController < ApplicationController

  def new 
    @watch_list = WatchList.new

    @movies = Movie.all
    @users = User.all
  end 

  def create 
    @current_user.watch_lists << WatchList.create(watch_list_params)

    redirect_to user_path(@current_user)
  end 

  private 

  def watch_list_params
    params.require(:watch_list).permit(:movie_id)
  end 

end
