class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :category
      t.string :type

      t.timestamps
    end
  end
end
