Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :watch_lists, only: [:new, :create]
  resources :movies
  # resources :users
  
  # get '/movies', to: 'movies#index', as: 'movies_path'
  # get '/movies/new', to: 'movies#new', as: 'new_movie'
  # get '/movies/:id', to: 'movies#show', as: 'movie'
  # get '/movies/:id/edit', to: 'movies#edit', as: 'edit_movie'
  
  # post '/movies', to: 'movies#create'
  # patch '/movies/:id', to: 'movies#update' 
  # delete '/movies/:id', to: 'movies#destroy'

  post '/movies/:id/like', to: 'movies#add_like', as: 'likes'
  
  

  
end

# movies_path => '/movies' 
# movie_path(@movie.id) => '/movies/:id' 
# new_movie_path => '/movies/new'
