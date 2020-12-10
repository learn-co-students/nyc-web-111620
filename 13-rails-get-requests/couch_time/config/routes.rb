Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get '/movies', to: 'movies#index', as: 'movies'
  get '/movies/:id', to: 'movies#show', as: 'movie'
end

# movies_path returns '/movies' 
# movie_path(@movie.id) returns '/movies/:id' 
