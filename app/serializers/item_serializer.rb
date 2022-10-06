class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :packed, :trip_id, :user_id, :trip_name

  belongs_to :user

  def trip_name
    self.object.trip.destination
  end

end
