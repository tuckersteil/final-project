class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :trainer_activity

    validates :user_id, :trainer_activity_id, :date_time, presence: true
end
