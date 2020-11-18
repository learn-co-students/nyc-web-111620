class User
    attr_reader :age, :views, :home_state #"attr"bute reader
    attr_accessor :name, :bio, :hair_color #like both reader and writer at once
    attr_writer :birthdate
    @@all = []

    def initialize(name, age, bio="", home_state="NJ") # cannot set haircolor or birthdate when i create 
        # if you have User.new(with some stuff)
        @name = name 
        @age = age 
        @hair_color = "red"
        @bio = bio 
        @birthdate = nil 
        @views = 0 
        @home_state = home_state
        @@all << self # self inside of initialize is the new instance itself 
    end

    def self.find_by_state(state)
        # `User.find_by_state(state)` will return a list of all users from that state 
        # map/collect
        # select 
        # self.all  ===> is an array (of User instances), so I can call any array method on it! 
        users_by_state = self.all.select { |user_inst| user_inst.home_state == state }
        # binding.pry 
    end
    
    def celebrate_birthday
        # `User#celebrate_birthday` will print "happy birthday" and increase the age 
        @age += 1  # self.age += WILL NOT work here because it is an attr_reader
        puts "Happy birthday you're now #{self.age} years old!!"
    end

    def self.all # to create class method prepend method name with self.
        @@all
        # self would be the class b/c we're in a class method 
    end

    
    def view_profile
        # self will be the instance, b/c we're in an instance method
        increment_views
        puts "You are #{self.name}, #{self.age} years old, with luscious #{self.hair_color} locks"
        puts "And you are so all about #{self.bio}"
        puts "Your profile has been viewed #{self.views}"
        # puts "Your birthday is #{self.birthdate}"
        # binding.pry
    end
    
    private 
    
    def increment_views
        @views += 1 
    end


    # def birthdate
    #     if @birthdate == today 
    #         "today!!! 🎉"
    #     else
    #         @birthdate
    #     end
    # end
end 
