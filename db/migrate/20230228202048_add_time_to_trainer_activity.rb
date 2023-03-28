class AddTimeToTrainerActivity < ActiveRecord::Migration[7.0]
  def change
    add_column :trainer_activities, :time, :string
  end
end
