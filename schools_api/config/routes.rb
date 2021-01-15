Rails.application.routes.draw do
  resources :schools, only: :index 
  get 'schools/:lat/:lng/:distance', to: 'schools#filter_schools', :constraints => {:lat => /\-?\d+(.\d+)?/, :lng => /\-?\d+(.\d+)?/ }
end
