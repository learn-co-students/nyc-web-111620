Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :movies
  
  get '/movies', to: 'movies#index', as: 'movies_path'
  get '/movies/new', to: 'movies#new', as: 'new_movie'
  get '/movies/:id', to: 'movies#show', as: 'movie'
  get '/movies/:id/edit', to: 'movies#edit', as: 'edit_movie'
  
  post '/movies', to: 'movies#create'
  patch '/movies/:id', to: 'movies#update' 
  
  

  
end

# movies_path => '/movies' 
# movie_path(@movie.id) => '/movies/:id' 
# new_movie_path => '/movies/new'
