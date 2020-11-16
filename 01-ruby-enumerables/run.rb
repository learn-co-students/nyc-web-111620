require 'pry'
# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?
# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 
# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?
# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?
# 5. I want to be able to find a single animal with a specific name. How do I do that? What datatype should be returned?

# Array of Hashes  #AoH

animals = [ 
    {name: "turbo", species: "cat", sound: "meeeeooooooowwwwww"}, # how sshould i represent mojo
    {name: "Cloud", species: "fish", sound: "gluuuuurp"},
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

# 1. show a list of all the names of all the pets
# 2. show me a list of just the pets that are... dogs?
# 3. let me search for pet by name

def run(animals_array) # this is just the definition 
    puts "WELCOME TO THE PET STORE!!!"
    puts "Would you like to..."
    puts "1. See a list of all pet names?"
    puts "2. See a list of all dogs?"
    puts "3. Find an animal by name?"
    choice = gets.chomp
    if choice.chomp == "1"
        # puts "you selected see all names"
        # all_names = []
        # animals_array.each { |animal| all_names << animal[:name] }
        # all_names
        p animals_array.map { |animal| animal[:name] } # or collect!!
        
    elsif choice.chomp == "2"
        p animals_array.select { |animal| animal[:species] == "dog" }
        # alternates are filter and find_all
    elsif choice.chomp == "3"
        puts "Which animal are you looking for?"
        name = gets.chomp
        p animals_array.find { |ani| ani[:name] == name } # or detect
        binding.pry
    else
        puts "That was not a valid option. Please try again!"
        run(animals_array)
    end


end


run(animals) #invoke/call/run the method 

binding.pry # when we run this file, will stop execution here and start repl
# ways to exit are... exit, exit!, !!! (last two will exit out of ALL pry's)