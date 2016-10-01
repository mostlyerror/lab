Rails.application.routes.draw do
  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'blog', to: 'blog#index'
  get 'blog/:id', to: 'blog#show'
  post 'blog', to: 'blog#create'
end
