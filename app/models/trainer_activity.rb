class TrainerActivity < ApplicationRecord
    belongs_to :trainer
    belongs_to :activity
    has_many :bookings 
    has_many :users, through: :bookings 

    validates :cost, :inclusion => 1..1000
    validates :specifics, :time, length: { minimum: 2 }
    validates :specifics, :time, :cost, :trainer_id, :activity_id, presence: true
end
