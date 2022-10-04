class Trip < ApplicationRecord
    has_many :items
    has_many :users, through: :items

    validates :destination, presence: true

end