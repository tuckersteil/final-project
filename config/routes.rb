Rails.application.routes.draw do
  namespace :api do
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    get "/trainers/:activity/:location", to: "trainer_activities#list"
    get "/timey/:train", to: "trainers#timey"
    get "confirm/:id", to: "trainer_activities#confirm"
    get "confirmy/:id", to: "activities#confirmy"
    get "/users", to: "users#index"
    delete "/logout", to: "sessions#destroy"
    get "/booksesh", to: "users#userbooking"
    patch "/trainers/:name/:time", to: "trainers#remove"
    patch "/removey/:name/:time", to: "trainers#removey"
    resources :trainers
    resources :bookings 
    resources :users 
    resources :bookings
    resources :trainer_activities
    resources :activities
    resources :trainers
  end 
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/trainers/:activity/:location", to: "trainer_activities#list"
  get "/timey/:train", to: "trainers#timey"
  get "confirm/:id", to: "trainer_activities#confirm"
  get "confirmy/:id", to: "activities#confirmy"
  get "/users", to: "users#index"
  delete "/logout", to: "sessions#destroy"
  get "/booksesh", to: "users#userbooking"
  patch "/trainers/:name/:time", to: "trainers#remove"
  patch "/removey/:name/:time", to: "trainers#removey"
  resources :trainers
  resources :bookings 
  resources :users 
  resources :bookings
  resources :trainer_activities
  resources :activities
  resources :trainers


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
