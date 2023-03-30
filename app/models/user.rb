class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :trainer_activities, through: :bookings

    validates :username, :email, presence: true
    validates :username, :email, uniqueness: true

end
