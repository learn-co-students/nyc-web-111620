class MoviesController < ApplicationController
  def index 
    @movies = Movie.all
    
    # render :index
  end 

  def show 
    @movie = Movie.find(params[:id])
    
    # render :show
  end 
  
  def new 
    @movie = Movie.new
    # render :new
  end 
  
  def create 
    @movie = Movie.create(movie_params)
    
    redirect_to movie_path(@movie) 
  end 
  
  
  def edit 
    @movie = Movie.find(params[:id])
    
    # render :edit
  end 
  
  def update 
    @movie = Movie.find(params[:id])

    @movie.update(movie_params)

    redirect_to movie_path(@movie)

  end 


  private 

  def movie_params
    params.require(:movie).permit(:title, :genre, :release_date)
  end 
  
end

