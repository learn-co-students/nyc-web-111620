class User
    attr_reader :age  #"attr"bute reader
    attr_accessor :name, :bio, :hair_color #like both reader and writer at once
    attr_writer :birthdate

    def initialize(name, age, bio="")
        # if you have User.new(with some stuff)
        @name = name 
        @age = age 
        @hair_color = "red"
        @bio = bio 
    end

    def view_profile
        puts "You are #{@name}, #{@age} years old, with luscious #{@hair_color} locks"
        puts "And you are so all about #{@bio}"
        ## HEADS UP FOR TOMORROW... SELF
    end
    
    # GETTER / READER METHOD
    # def name # our first instance method! 
    #     @name
    # end

    # # SAPMLE SETTER METHOD!
    # def name=(n)
    #     @name = n
    # end

    # def age # our first instance method! 
    #     @age
    # end

    # def bio # our first instance method! 
    #     @bio
    # end
end 