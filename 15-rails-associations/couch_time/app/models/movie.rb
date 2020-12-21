class Movie < ApplicationRecord
  has_many :watch_lists
  has_many :users, through: :watch_lists

  validates :title, uniqueness: true


  validate :any_method_i_create

  def any_method_i_create
    # if
      self.errors.add(:title, "choose a dif title") 
    # end 
  end 
end 
