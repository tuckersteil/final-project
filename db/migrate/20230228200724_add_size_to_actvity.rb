class AddSizeToActvity < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :size, :integer
  end
end
