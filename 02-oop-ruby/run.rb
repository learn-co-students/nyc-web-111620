require 'pry' #goes to rubygems, finds the gem, and gives us access to that code

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
end




binding.pry 
