class Trainer < ApplicationRecord
    has_many :trainer_activities
    has_many :activities, through: :trainer_activities

    validates :name, :location, :image, :age, presence: true
    validates :name, :location,  length: { minimum: 2 }
    validates :age, :inclusion => 18..100
end
