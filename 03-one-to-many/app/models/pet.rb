# 1. Set up Pet's initialize. Should be initialized with name, species and sound
# 2. Set up Pet's readers and writers. Can change sound and name, cannot change species
# 3. Set up `Pet.all` 

# Ori, Noura, Okechukwu 

class Pet 
    # *attr_macros* allow us to read/write that information
    attr_accessor :sound, :name, :owner
    attr_reader :species
    @@all = []

    def initialize(name, species, sound, owner=nil) # say we're Mojo 
        @name = name
        @species = species
        @sound = sound
        @owner = owner  # instance variables lets the instance *remember* the info it was created with
        @@all << self 
    end

    def self.all
        @@all 
    end

end