class Activity < ApplicationRecord
    has_many :trainer_activities
    has_many :trainers, through: :trainer_activities

    validates :category, :lesson_type, :size,  presence: true
    validates :category, :lesson_type, length: { minimum: 2 }
end
