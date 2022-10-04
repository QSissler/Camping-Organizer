class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :category, :packed, :trip_id, :user_id
end
