class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            session[:user_email] = user.email
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
        end
    end 

    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :created
        else
           render json: { error: "Not authorized" }, status: :unauthorized
        end 
    end 

    def index 
        user = User.all
        render json: user
    end 

    def destroy 
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def userbooking
        @user_bookings = Booking.where(user_id: session[:user_id])
        final = []
        @user_bookings.each do |booking|
            trainer = TrainerActivity.find(booking.trainer_activity_id)
            if final.exclude?(trainer)
                final << {trainer: trainer.trainer.name, trainer_id: trainer.trainer.id, location: trainer.trainer.location, activity: trainer.activity.category, date: booking.date_time, cost: trainer.cost, id: booking.id, train_active: booking.trainer_activity_id}
            end 
        end
        render json: final
    end


    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation, :email)
    end 
end
