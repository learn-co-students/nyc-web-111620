class User < ApplicationRecord
  has_many :watch_lists, dependent: :destroy
  has_many :movies, through: :watch_lists
end
