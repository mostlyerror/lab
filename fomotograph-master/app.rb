require 'sinatra'
require 'HTTParty'
require 'json'
require_relative 'models/product.rb'

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
  # PRODUCTS PAGE LISTING ALL THE PRODUCTS
  DATA = HTTParty.get('https://old-startup-api.udacity.com/products.json')['data']
  LOCATIONS = ['canada', 'england', 'france', 'ireland', 'mexico', 'scotland', 'taiwan', 'us']

  erb "<!DOCTYPE html>
  <html>
  <head>
  <title>Fomotograph | All Products </title>
  <link rel='stylesheet' type='text/css' href='<%= url('/style.css') %>'>
  <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,500,600' rel='stylesheet' type='text/css'>
  </head>

  <body>

    <div id='container'>

      <div id='header'>
        <a href='/'><img src='/logo-white.png' alt='logo image' class='logo'/></a>
        <a href='/team' class='nav'>Team</a>
        <a href='/products' class='nav'>Products</a>
      </div>


      <div id='main'>
        <h1> All Products </h1>
        <div id='wrapper'>


          <% LOCATIONS.each do |location| %>
          <a href='/products/location/<%= location %>'>
          <div class='product'>
            <div class='thumb'>
              <img src='<%= DATA.select { |product| product['loc'] == location }.sample['url'] %>' />
            </div>
            <div class='caption'>
              <%= location != 'us' ? location.capitalize : location.upcase %>
            </div>
          </div>
          </a>
          <% end %>

        </div>
      </div>

      <div id='footer'>
        © Fomotograph
      </div>

    </div>

  </body>
  </html>"
end

get '/products/location/:location' do
  # PAGE DISPLAYING ALL PHOTOS FROM ONE LOCATION
  DATA = HTTParty.get('https://old-startup-api.udacity.com/products.json')['data']
  erb "<!DOCTYPE html>
  <html>
  <head>
    <title>Fomotograph | <%= params[:location] != 'us' ? params[:location].capitalize : params[:location].upcase %> </title>
    <link rel='stylesheet' type='text/css' href='<%= url('/style.css') %>'>
    <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,500,600' rel='stylesheet' type='text/css'>
  </head>

  <body>

    <div id='container'>

      <div id='header'>
        <a href='/'><img src='/logo-white.png' alt='logo image' class='logo'/></a>
        <a href='/team' class='nav'>Team</a>
        <a href='/products' class='nav'>Products</a>
      </div>

      <div id='main'>


        <h1> <%= params[:location] != 'us' ? params[:location].capitalize : params[:location].upcase %> </h1>
        <div id='wrapper'>

        <% products = DATA.select{ |product| product['loc'] == params[:location] } %>

        <% products.each do |product| %>
          <a href='/products/<%= product['id'] %>'>
          <div class='product'>
            <div class='thumb'>
              <img src='<%= product['url'] %>' />
            </div>
            <div class='caption'>
              <%= product['title'] %>
            </div>
          </div>
          </a>
        <% end %>

        </div>
        <a class='small-button' href='/products'> View All Products </a>
      </div>

      <div id='footer'>
        © Fomotograph
      </div>

    </div>

  </body>
  </html>"
end

get '/products/:id' do
  # PAGE DISPLAYING ONE PRODUCT WITH A GIVEN ID
  DATA = HTTParty.get('https://old-startup-api.udacity.com/products.json')['data']
  erb "<!DOCTYPE html>
  <html>
  <head>
    <% product = DATA.select { |prod| prod['id'] == params[:id].to_i }.first %>
    <title>Fomotograph | <%= product['title'] %> </title>
    <link rel='stylesheet' type='text/css' href='<%= url('/style.css') %>'>
    <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,500,600' rel='stylesheet' type='text/css'>
  </head>

  <body>

    <div id='container'>

      <div id='header'>
        <a href='/'><img src='/logo-white.png' alt='logo image' class='logo'/></a>
        <a href='/team' class='nav'>Team</a>
        <a href='/products' class='nav'>Products</a>
      </div>

      <div id='main'>
        <h1><%= product['title'] %></h1>
        <a class='small-button' href='#'>Fomotograph Me!</a>
        <p class='summary'> <%= product['summary'] %> </p>
        <p class='summary'>Order your prints today for $<%= product['price'] %></p>
        <img class='full' src='<%= product['url'] %>' />
        <a class='small-button' href='/products/location/<%= product['loc'] %>'> View All <%= product['loc'] != 'us' ? product['loc'].capitalize : product['loc'].upcase %> Products </a>
      </div>

      <div id='footer'>
        © Fomotograph
      </div>

    </div>

  </body>
  </html>"
end
