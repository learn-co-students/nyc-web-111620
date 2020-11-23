require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


# Put your variables here~!

eric = Passenger.new("Eric")
jallen = Passenger.new("Jallen")
rianna = Passenger.new("Rianna")
caryn = Passenger.new("Caryn")



spongebob = Driver.new("Spongebob")
patrick = Driver.new("Patrick Star")
sandy = Driver.new("Sandy")


r1 = Ride.new(spongebob, eric, 2)
r2 = Ride.new(patrick, eric, 3)
r3 = Ride.new(spongebob, jallen, 101)


binding.pry
