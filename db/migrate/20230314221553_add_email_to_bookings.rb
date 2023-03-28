class AddEmailToBookings < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :email, :string
  end
end
