class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :trainer_activity
end
