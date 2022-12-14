class TripsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        trips = user.trips.uniq
        render json: trips, status: :ok
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip, status: :ok
    end

    def create
        trip = Trip.create!(trip_params)
        render json: trip, status: :created
    end

    private

    def trip_params
        params.permit(:destination)
    end

end
