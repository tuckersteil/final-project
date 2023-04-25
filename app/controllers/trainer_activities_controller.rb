class TrainerActivitiesController < ApplicationController
    def index 
        train_active = TrainerActivity.all
        render json: train_active
    end

    def show 
        train_active = TrainerActivity.where(id: params[:id])
        render json: train_active
    rescue ActiveRecord::RecordNotFound
        render json: "Trainer Activity not found", status: :not_found
    end 

    def list
        trainers = TrainerActivity.joins(:trainer).where(trainers: {location: params[:location].downcase}).joins(:activity).where(activities: {category: params[:activity].downcase})
        final_final = []
        trainers.each do |person|
            final_output = Trainer.find_by(id: person.trainer_id)
            if final_final.exclude?(final_output)
                final_final << final_output
            end 
        end 
        if (final_final.length >= 1)
            render json: final_final
        else 
            render json: {error: "No Available Trainers"}, status: :not_found
        end
        
    end 


    def confirm
        @train_active = TrainerActivity.find_by(id: params[:id])
        render json: @train_active, include: [:activity, :trainer]
    end 



end


 