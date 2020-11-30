class User < ActiveRecord::Base

    # `Has_many` macro give us instance methods -> Array of instances
    has_many :ownerships
    has_many :neopets, through: :ownerships

    
    def introduce_all_pets
        puts "These are my pets! My name is #{self.username}!"

        self.ownerships.each_with_index do |ownership, idx|
            puts "#{idx + 1}) #{ownership.color} #{ownership.neopet.name}"
        end
    end



end