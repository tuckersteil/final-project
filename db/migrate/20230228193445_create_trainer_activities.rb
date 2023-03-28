class CreateTrainerActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :trainer_activities do |t|
      t.integer :trainer_id
      t.integer :activity_id
      t.integer :cost
      t.string :specifics

      t.timestamps
    end
  end
end
