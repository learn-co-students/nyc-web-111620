class MoviesController < ApplicationController
  before_action :find_movie, only: [:show, :edit, :update, :destroy]

  def index 
    movies = Movie.all

    action = movies.select {|movie| movie.genre == "Action"}
    romance = movies.select {|movie| movie.genre == "Romance"}
    comedy = movies.select {|movie| movie.genre == "Comedy"}

    @movie_categories = [
      {category: "Action", movies: action}, 
      {category: "Romance", movies: romance}, 
      {category: "Comedy", movies: comedy}, 
    ]
  
    
    # render :index
  end 

  def show 
    # @movie = Movie.find(params[:id])

    session[:page_visits] ||= 0
    session[:page_visits] = session[:page_visits].to_i + 1

    # render :show
  end 

  
  def new 
    @movie = Movie.new
    # render :new
  end 
  
  def create 
    movie = Movie.create(movie_params)
    # byebug
    # @movie = Movie.new(movie_params)
    
      # @movie.save
    if movie.valid?
      redirect_to movie_path(movie)
    else 
      flash[:errors_array] = movie.errors.full_messages
      redirect_to new_movie_path
    end  
  end 
  
  
  def edit 
    # @movie = Movie.find(params[:id])
    
    # render :edit
  end 
  
  def update 
    # @movie = Movie.find(params[:id])
    
    if @movie.update(movie_params)
     redirect_to movie_path(@movie)
    else 
      flash[:errors_array] = @movie.errors.full_messages
      redirect_to edit_movie_path(@movie)
    end 
  end 
  
  def destroy 
    # @movie = Movie.find(params[:id])
    @movie.destroy

    redirect_to movies_path
  end 


  private 

  def movie_params
    params.require(:movie).permit(:title, :genre, :release_date)
  end 
  
  def find_movie
    @movie = Movie.find(params[:id])
  end 

end

