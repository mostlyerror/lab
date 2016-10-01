class BlogController < ApplicationController
  def index
    @test = params[:test]
  end

  def show
    @id = params[:id]
  end

  def create
    redirect_to action: :index
  end
end

