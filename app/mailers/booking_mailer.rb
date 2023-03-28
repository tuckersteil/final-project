class BookingMailer < ApplicationMailer
 
    def new_booking_email
        @booking = params[:booking]
        @info = params[:info]
        mail(to: @booking.email, subject: "You Booked a Training Session!!")
      end
end
