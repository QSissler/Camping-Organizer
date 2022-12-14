class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :grouped_items


  def grouped_items
    self.object.items.group_by{|item| item.trip_id}
  end
end
