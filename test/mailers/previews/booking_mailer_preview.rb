# Preview all emails at http://localhost:3000/rails/mailers/booking_mailer
class BookingMailerPreview < ActionMailer::Preview
    def new_order_email
        # Set up a temporary order for the preview
        order = Order.new(user_id: 1, email: "jimbo@gmail.com", trainer_activity_id: 1, time: "1:30", date: "March 18 2023")
    
        OrderMailer.with(order: order).new_order_email
      end
end
