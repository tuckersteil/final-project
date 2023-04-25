class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :age, :taken_times

  has_many :trainer_activities, serializer: TrainerTrainerActivitySerializer
  

end
