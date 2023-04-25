class BookingsController < ApplicationController
   
  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(user_id: session[:user_id], trainer_activity_id: params[:trainer_activity_id], date_time: params[:date_time], email: session[:user_email])
  @info = TrainerActivity.find_by(id: params[:trainer_activity_id])
    if @booking.save
       #BookingMailer.with(booking: @booking, info: @info).new_booking_email.deliver_later
      render json: @booking
    else 
      render json: { errors: @booking.errors.full_messages }, status: :unprocessable_entity
    end
  end 

  def index 
    user = Booking.all
    render json: user
end 

def destroy 
  user = Booking.find(params[:id])
  user.destroy
  @user_bookings = Booking.where(user_id: session[:user_id])
  final = []
  @user_bookings.each do |booking|
      trainer = TrainerActivity.find(booking.trainer_activity_id)
      if final.exclude?(trainer)
          final << {trainer: trainer.trainer.name, trainer_id: trainer.trainer.id, location: trainer.trainer.location, activity: trainer.activity.category, date: booking.date_time, cost: trainer.cost, id: booking.id}
      end 
  end
  render json: final
  
end


def update
  booking = Booking.find_by(id: params[:id])
#  booking.date_time = params[:_json]
  booking.update(date_time: params[:_json])
  render json: booking
end 

      
    
end
