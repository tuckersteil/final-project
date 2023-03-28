class ChangeActvityType < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :type
    add_column :activities, :lesson_type, :string
  end
end
