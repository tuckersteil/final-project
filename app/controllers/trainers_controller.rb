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

    def update
        @trainer = Trainer.find_by(id: params[:id])
        @trainer.taken_times << params[:time]
        @trainer.save
        render json: @trainer.taken_times
    end 

    def timey 
        @trainer = Trainer.find_by(id: params[:train])
        render json: @trainer
    end 


    
    
end
