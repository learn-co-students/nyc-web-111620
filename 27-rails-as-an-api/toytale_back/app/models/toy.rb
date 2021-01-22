class Toy < ApplicationRecord
  has_many :owners


  def call_anything 
    {
      name: self.name,
      image: self.image,
      likes: self.likes,
      owners: self.owners
    }
  end 
end
