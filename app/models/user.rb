class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :trainer_activities, through: :bookings


    

end
