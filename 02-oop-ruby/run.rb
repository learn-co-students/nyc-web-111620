require 'pry' #goes to rubygems, finds the gem, and gives us access to that code
require_relative './app/models/user'

animals = [ 
    {name: "turbo", species: "cat", sound: "meeeeooooooowwwwww"}, 
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

def run
    puts "Welcome to The ______ App!"
    puts "Please sign up for our application!"
    puts "What is your name?"
    name = gets.chomp
    puts "What is your age?"
    age = gets.chomp
    puts "What are you all about?"
    bio = gets.chomp
    new_user = User.new(name, age, bio)

    puts "Would you like to view your profile? (y/n)"
    choice = gets.chomp
    if choice == "y"
        new_user.view_profile
    end

    puts "Would you like to edit your hair color? (y/n)"
    choice = gets.chomp
    if choice == "y"
        puts "What color is your hair then?"
        color = gets.chomp
        new_user.hair_color = color
    end

    binding.pry

end


# Doesn't know about User inside of app/models/user.rb

# initialize was given 3 and expected 0 
# cam = User.new("Cam", 21, "Day Two, New You?") #name, age, bio 
# daniel = User.new("Daniel", 47, "Dolla Dolla Bills")
# User.new (would work without initialize)


binding.pry 
