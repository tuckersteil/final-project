class BookingsController < ApplicationController
   
  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(user_id: session[:user_id], trainer_activity_id: params[:trainer_activity_id], time: params[:time], date: params[:date], email: session[:user_email])
  @info = TrainerActivity.find_by(id: params[:trainer_activity_id])
    if @booking.save
      # BookingMailer.with(booking: @booking, info: @info).new_booking_email.deliver_later
      render json: @booking
    else 
      render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end 

  def index 
    user = Booking.all
    render json: user
end 

def destroy 
  user = Booking.find(params[:id])
  user.destroy
  head :no_content
end

      private
    
      def booking_params
        params.permit(:user_id, :trainer_activity_id, :time, :date, :email)
      end
    
end
