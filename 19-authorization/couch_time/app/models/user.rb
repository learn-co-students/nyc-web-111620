class User < ApplicationRecord
  has_many :watch_lists, dependent: :destroy
  has_many :movies, through: :watch_lists

  has_secure_password

  # def password
  # end 

  # def password=(secret)
  #   pw = BCrypt::Password.create(secret)

  #   self.password_digest = pw
  # end 

  # def authenticate(user_input)
  #   BCrypt.new(self.password_digest) == user_input
  # end 
end
