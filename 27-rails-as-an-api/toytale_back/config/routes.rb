Rails.application.routes.draw do
  # resources :toys

  get '/toys', to: 'toys#index'
  patch '/toys/:id', to: 'toys#update'
  post '/toys', to: 'toys#create'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
