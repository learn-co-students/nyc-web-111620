class User < ApplicationRecord
  has_many :watch_lists, dependent: :destroy
  has_many :movies, through: :watch_lists



  def movies 
    self.watch_lists.map {|wl| wl.movie}
  end 


  def get_api_movies
    my_movies = []

    self.watch_lists.each {
      movie = API_REQUEST(whatchlist.apid_movie_id) 
      my_movies << movie 
    }

    my_movies
  end

@user.get_api_movies








  has_many :followed_users, foreign_key: :follower_id, class_name: 'Friendship'
  has_many :followees, through: :followed_users

  has_many :following_users, foreign_key: :followee_id, class_name: 'Friendship'
  has_many :followers, through: :following_users

  # def followed_users
  #   Friendship.select {|friendship| friendship.follower_id == self.id }
  # end

  # def following_users
  #   Friendship.select {|friendship| friendship.followee_id == self.id }
  # end

  # @user.followed_users
  # @user.following_users

  has_secure_password

  # def friends 
  #   friends = []
  # end 

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
