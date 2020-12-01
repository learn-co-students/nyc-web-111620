class User < ActiveRecord::Base

    # `Has_many` macro give us instance methods -> Array of instances
    has_many :ownerships
    has_many :neopets, through: :ownerships

    # @@prompt = TTY::Prompt.new

    def self.login_a_user
        puts "Ah, you chosen login a user!"
        puts "What is your username?"
        userName = gets.chomp
        puts "What is your password?"
        pass = gets.chomp

        user = User.find_by(username: userName, password: pass)

        if user.nil?
            puts "Sorry, nobody with that username or password exists"
        else
            user
        end
    end

    def self.register_a_user
        puts "What is your username?"
        userName = gets.chomp
        puts "What is your password?"
        pass = gets.chomp
        puts "What is your age?"
        age = gets.chomp

        user = User.find_by(username: userName)

        if user
            puts "Sorry, that username is already taken"
        else
            User.create(username: userName, password: pass, age: age)
        end
    end

    
    def introduce_all_pets
        puts "These are my pets! My name is #{self.username}!"

        self.ownerships.each_with_index do |ownership, idx|
            puts "#{idx + 1}) #{ownership.color} #{ownership.neopet.name}"
        end
        # --- @@prompt.select ----
        puts "What do you want to do?"
        answer = gets.chomp
    end



end