class Trip < ApplicationRecord
    has_many :items, dependent: :destroy
    has_many :users, through: :items

    validates :destination, presence: true

end