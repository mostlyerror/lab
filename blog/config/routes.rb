Rails.application.routes.draw do
  mount Wellspring::Engine, at: '/admin'

  # get '/:slug', to: 'blog_posts#show'
  get '/:slug', to: 'posts#show', as: :post
  # root to: 'blog_posts#index'
  root to: 'posts#index'
end

