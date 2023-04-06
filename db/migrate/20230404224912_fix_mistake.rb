class FixMistake < ActiveRecord::Migration[7.0]
  def change
     remove_column :users, :taken_times
     add_column :trainers, :taken_times, :text, array: true, default: []
  end
end
