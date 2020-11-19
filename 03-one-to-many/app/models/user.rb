class User
    attr_reader :age, :views, :home_state
    attr_accessor :name, :bio, :hair_color 
    attr_writer :birthdate
    @@all = []

    def initialize(name, age, bio="", home_state="NJ")
        @name = name 
        @age = age 
        @home_state = home_state
        @bio = bio 
        @hair_color = "red"
        @birthdate = nil 
        @views = 0 
        @@all << self 
    end

    def self.find_by_state(state)
        users_by_state = self.all.select { |user_inst| user_inst.home_state == state }
    end
    
    def celebrate_birthday
        @age += 1
        puts "Happy birthday you're now #{self.age} years old!!"
    end

    def self.all 
        @@all
    end

    
    def view_profile
        increment_views
        puts "You are #{self.name}, #{self.age} years old, with luscious #{self.hair_color} locks"
        puts "And you are so all about #{self.bio}"
        puts "Your profile has been viewed #{self.views}"
    end
    
    private 
    
    def increment_views
        @views += 1 
    end

end 
