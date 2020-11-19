class Pet 
    # *attr_macros* allow us to read/write that information
    attr_accessor :sound, :name, :owner
    attr_reader :species
    @@all = []

    def initialize(name, species, sound, owner=nil) 
        @name = name
        @species = species
        @sound = sound
        @owner = owner  
        @@all << self 
    end

    def self.all
        @@all 
    end

    def best_friend_name
        if self.owner
            self.owner.name
        else
            nil
        end
    end
    def self.all_species
        Pet.all.map do |pet| 
            pet.species 
        end.uniq
    end

end

## BELONGS TO CLASS
## will hold the reference to the related instance (SSOT)
## initialize with the related instance
## remember the related instance w/ an instance variable
## expose that info with attr_macros (reader, writer)