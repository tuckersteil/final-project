class CreateTrainers < ActiveRecord::Migration[7.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :location
      t.string :image
      t.integer :age

      t.timestamps
    end
  end
end
