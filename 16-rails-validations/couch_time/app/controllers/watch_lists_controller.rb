class WatchListsController < ApplicationController

  def new 
    @watch_list = WatchList.new
  end 

  def create 
    watch_list = WatchList.create(watch_list_params)

    redirect_to movie_path(watch_list.movie)
  end 

  private 

  def watch_list_params
    params.require(:watch_list).permit(:user_id, :movie_id)
  end 

end
