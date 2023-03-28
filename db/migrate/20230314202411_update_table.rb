class UpdateTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :email_confirmed
    remove_column :users, :confirm_token
    remove_column :bookings, :cost
  end
end
