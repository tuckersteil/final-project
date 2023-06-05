class UserBookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :trainer, :trainer_id, :train_active, :location, :cost, :activity

  def trainer
    self.object.trainer_activity.trainer.name
  end 

  def date
    self.object.date_time
  end 

  def trainer_id
    self.object.trainer_activity.trainer.id
  end

  def train_active
    self.object.trainer_activity.id
  end 


  def location
    self.object.trainer_activity.trainer.location
  end 

  def cost
    self.object.trainer_activity.cost
  end

  def activity
    self.object.trainer_activity.activity.category
  end 
end
