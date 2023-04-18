class FixDate < ActiveRecord::Migration[7.0]
  def change
    remove_column :bookings, :time
    remove_column :bookings, :date
    add_column :bookings, :date_time, :string
  end
end
