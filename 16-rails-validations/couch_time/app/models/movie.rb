class Movie < ApplicationRecord
  has_many :watch_lists
  has_many :users, through: :watch_lists
  
  # validates :attribute
  # validate :custom_method

  # When creating a movie you must have a title & Genre
  validates :title, :genre, presence: true

  # Move title must be one of a kind
  validates :title, uniqueness: {case_sensitive: false, message: "gotta be unique"}

  # Realease date can't be before 1900's
  validates :release_date, numericality: {greater_than: 1899, less_than: Time.now.year}

  # genre must be one of these Action, Romance, Comedy
  validates :genre, inclusion: {in: ["Action", "Romance", "Comedy"]}

  validate :name_can_not_be_scooter

  def name_can_not_be_scooter
    if self.title.downcase == "scooter"
      self.errors.add(:title, "think of a better title")
    end 
  end 

end 
