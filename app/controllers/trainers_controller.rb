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
         trainer = Trainer.find_by(id: params[:id])
        #  trainer.update(taken_times: [])
        trainer.taken_times << params[:_json]
        trainer.save
        render json: trainer.taken_times
    end 

# :name = trainer_id 
# :time = old booking time 
# :_json = new booking time 
    def remove 
        trainer = Trainer.find_by(id: params[:name])
        tucker = trainer.taken_times 
        list = []
        tucker.each do |tuck|
            if tuck == params[:time]
                tuck = params[:_json]
                list << tuck
            else 
                list << tuck
            end
        end
        trainer.taken_times = list 
        trainer.save
        render json: trainer
    end 

    def removey
        trainer = Trainer.find_by(id: params[:name])
            tucker = trainer.taken_times 
            list = []
            tucker.each do |tuck|
                if tuck != params[:time]
                    list << tuck
                end
            end
        trainer.taken_times = list 
        trainer.save
        render json: trainer
    end 

    def timey 
        trainer = Trainer.find_by(id: params[:train])
        render json: trainer
    end 


    
    
end

