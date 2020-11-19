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
turbo = Pet.new("turbo", "dog", "woof", jason) 
nameless = Pet.new("nameless", "cat", "grumble grumble")

animals = [ 
    {name: "Mickey", species: "dog", sound: "arf"},
    {name: "Skip", species: "dog", sound: "woof"},
    {name: "Bella", species: "dog", sound: "ruff"},
    {name: 'Grizz', species:  'bear', sound: 'Grrrr'},
    {name: "Sniffy", species: "mouse", sound: "sniff sniff"},
    {name: "Nugget", species: "dog", sound: "woo"},
    {name: "spark", species: "dog", sound: "grrrrr"},
    {name: "Sharky", species: "shark", sound: "Help I’m in a tornado"},
    {name: 'raffi', species: 'lion', sound:'rawr'},
    {name: "Porky", species: "pig", sound: "oink"}
]


result = animals.each { |animal| Pet.new(animal[:name], animal[:species], animal[:sound])}


binding.pry 
