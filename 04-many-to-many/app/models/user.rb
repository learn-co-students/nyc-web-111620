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

    def pets 
        Pet.all.find_all { |pet| pet.owner == self }
    end

    def adopt_pet(pet)
        if pet.owner == nil
            pet.owner = self 
        else
            puts "you can't go around stealing pets!!!!"
        end
    end

    def number_of_pets
        self.pets.count
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

## HAS MANY CLASS
## does NOT hold a reference to the related instance*s*
## have a method to go through SSOT, the related class
##    and use select/filter/find_all to get only the related instances
