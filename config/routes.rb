Rails.application.routes.draw do
  
  resources :users 

  
  resources :bookings
  resources :trainer_activities
  resources :activities
  resources :trainers
  get "/trainers/:activity/:location", to: "trainer_activities#list"
  get "confirm/:id", to: "trainer_activities#confirm"
  get "confirmy/:id", to: "activities#confirmy"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/booksesh", to: "users#userbooking"
  get "/timey/:train", to: "trainers#timey"
  patch "/trainers/:name/:time", to: "trainers#remove"
  patch "/removey/:name/:time", to: "trainers#removey"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "trainers#index"

end
