require 'sinatra'
require 'HTTParty'
require 'json'
require_relative 'models/product.rb'

helpers do
  def titlecase(title)
    title != 'us' ? title.capitalize : title.upcase
  end
end

# HOME LANDING PAGE SHOWING BANNER PHOTO, TITLE, AND SUBTITLE
get '/' do
  @page_title = 'home'
  erb :index
end

# TEAM PAGE LISTING THE TEAM MEMBERS
get '/team' do
  @page_title = 'team'
  erb :team
end

get '/products' do
  @page_title = 'products'
  @products = Product.sample_locations
  erb :products
end

get '/products/location/:location' do
  @products = Product.find_by_location(params[:location])
  @page_title = params[:location]
  erb :category
end

get '/products/:id' do
  @page_title = 'product'
  @product = Product.find(params[:id])
  erb :single
end

# all products under $10
get '/deals' do
  @page_title = 'deals'
  @products = Product.deals
  erb :deals
end

