class ActivitiesController < ApplicationController
    def index 
        activities = Activity.all
        render json: activities
    end

    def show 
        activity = Activity.find(params[:id])
        render json: activity.trainers
    rescue ActiveRecord::RecordNotFound
        render json: "Activity not found", status: :not_found
    end 


    def confirmy
        activity = Activity.find_by(id: params[:id])
        render json: activity
     end 
end
