class ToysController < ApplicationController

  def index 
    # toys = Toy.all  # [{},{},{},{},{}]
    toys = Toy.order(:id)

  
    # render :index ------ aka render HTML
    render json: toys
  end 


  def update
    toy = Toy.find(params[:id])
    # toy.update(likes: params[:likes])
    toy.update(toy_params)

    # toy = {name: "greg", image: "some url", likes: 5, }

    render json: toy.to_json
  end 

  def create
    toy = Toy.create(toy_params)

    render json: toy
  end

  private 

  def toy_params
    params.permit(:name, :image, :likes)
  end 
end
