Rails.application.routes.draw do
  root to: 'todos#index'
  resources :todos, only: [:new, :create, :index] do
    resource :completion, only: [:create, :destroy]
  end
  resource :session, only: [:new, :create]
end
