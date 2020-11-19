require 'pry' 
require_relative './app/models/user'
require_relative './app/models/pet'



cam = User.new("Cam", 21, "Day Two, New You?", "CA") #name, age, bio, home_state
daniel = User.new("Daniel", 33, "Dolla Dolla Bills", "NY")
caryn = User.new("caryn", 47, "inigo montoya prepare to die")
jason = User.new("jason", 22, "love sleeping", "NY")
julio = User.new("julio", 49, "lets code!!", "FL")
jallen = User.new("jallen", 27, "lets go", "MO")
j2 = User.new("jason", 88, "hates sleeping", "CA")


mojo = Pet.new("Mojo", "cat", "meeeeoooowww", caryn)
turbo = Pet.new("turbo", "dog", "woof", jason) # need to associate the whoooole instance, not a string / piece of data 
nameless = Pet.new("nameless", "cat", "grumble grumble")


animals = [ 
    {name: "Mojo", species: "cat", sound: "meeeeooooooowwwwww"}, 
    {name: "Mickey", species: "dog", sound: "arf"},
    {name: "Skip", species: "dog", sound: "woof"},
    {name: "Bella", species: "dog", sound: "ruff"},
    {name: 'turbo', species: 'dog', sound: 'woof'},
    {name: 'Grizz', species:  'bear', sound: 'Grrrr'},
    {name: "Sniffy", species: "mouse", sound: "sniff sniff"},
    {name: "Nugget", species: "dog", sound: "woo"},
    {name: "spark", species: "dog", sound: "grrrrr"},
    {name: "Sharky", species: "shark", sound: "Help I’m in a tornado"},
    {name: 'raffi', species: 'lion', sound:'rawr'},
    {name: "Porky", species: "pig", sound: "oink"}
]


# result = animals.each { |animal| Pet.new(animal[:name], animal[:species], animal[:sound])}
# do this with each, result will be the animals array
# do this with map, result will be an array of Pet instances 

def run
    puts "Welcome to The ______ App!"
    puts "Please sign up for our application!"
    puts "Would you like to..."
    puts "1. log in"
    puts "2. sign up"
    choice = gets.chomp
    if choice == "1"
        puts "What is your name?"
        name = gets.chomp
        puts "What is your age?"
        age = gets.chomp
        puts "What are you all about?"
        bio = gets.chomp
        new_user = User.new(name, age, bio)
    elsif choice == "2"
        # how do we sign in? 
    end

    # puts "Would you like to view your profile? (y/n)"
    # choice = gets.chomp
    # if choice == "y"
    #     new_user.view_profile
    # end

    # puts "Would you like to edit your hair color? (y/n)"
    # choice = gets.chomp
    # if choice == "y"
    #     puts "What color is your hair then?"
    #     color = gets.chomp
    #     new_user.hair_color = color
    # end

    binding.pry

end








binding.pry 
