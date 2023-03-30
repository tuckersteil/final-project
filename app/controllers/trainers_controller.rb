class TrainersController < ApplicationController

    def index 
        trainers = Trainer.all
        render json: trainers
    end

    def show 
        @trainer = Trainer.find(params[:id])
        render json: @trainer, include: [:activities]
    rescue ActiveRecord::RecordNotFound
        render json: "Trainer not found", status: :not_found
    end 


    
    
end
