class AddTakenToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :taken_times, :text, array: true, default: []
  end
end
