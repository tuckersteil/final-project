class UserSerializer < ActiveModel::Serializer
  # attributes :id, :username, :password_digest, :created_at, :updated_at, :email

  has_many :bookings, serializer: UserBookingSerializer
 
end
