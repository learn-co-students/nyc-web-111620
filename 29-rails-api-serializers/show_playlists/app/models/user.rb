class User < ApplicationRecord
  has_many :playlists
  has_many :shows, through: :playlists

  def name_and_tag
    "#{self.name} - #{self.tagline}"
  end 

  # def to_json
  #   {
  #     name: self.name, 
  #     tagline: self.tagline,
  #     my_shows: self.shows
  #   }
  # end 
end
