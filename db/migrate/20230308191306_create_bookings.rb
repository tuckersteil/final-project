class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :trainer_activity_id
      t.integer :cost
      t.string :time
      t.string :date

      t.timestamps
    end
  end
end
