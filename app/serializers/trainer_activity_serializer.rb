class TrainerActivitySerializer < ActiveModel::Serializer
  attributes :id, :trainer_id, :activity_id, :cost, :specifics, :time

  belongs_to :trainer
  belongs_to :activity
end
