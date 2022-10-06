class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, status: :ok
    end

    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def update
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :ok
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
    end

    private
    def item_params
        params.permit(:name, :image, :category, :packed, :trip_id, :user_id, :user)
    end

end
