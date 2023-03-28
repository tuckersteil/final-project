class TrainerActivitiesController < ApplicationController
    def index 
        train_active = TrainerActivity.all
        render json: train_active
    end

    def show 
        train_active = TrainerActivity.where(trainer_id: params[:id])
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
        train_active = TrainerActivity.find_by(id: params[:id])
        render json: train_active
    end 

    


end


 #     trainers = Trainer.all
    #     trainer = trainers.where(location: params[:location])
    #     trainer_ids = []
    #     trainer.each do |person|
    #        trainer_ids << person.id
    #     end

    #     activities = Activity.all
    #     activity = activities.where(category: params[:activity])
    #     activity_ids = []
    #     activity.each do |act|
    #         activity_ids << act.id
    #     end 


    #     matching = []
    #    final_finds = TrainerActivity.all
    #     final_finds.each do |trave|
    #         trainer_ids.each do |the_id|
    #             activity_ids.each do |act_id|
    #                 if the_id === trave.trainer_id && act_id === trave.activity_id
    #                     matching << trave
    #                 end
    #             end 
    #         end 
    #     end

    #     final_final = []
    #     matching.each do |fits|
    #         final_output = Trainer.find_by(id: fits.trainer_id)
    #         if final_final.exclude?(final_output)
    #             final_final << final_output
    #         end 
    #     end 
    #     render json: final_final