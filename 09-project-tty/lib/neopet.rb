class Neopet < ActiveRecord::Base

    # `Has_many` macro give us instance methods -> Array of instances
    has_many :ownerships
    has_many :users, through: :ownerships

    
end