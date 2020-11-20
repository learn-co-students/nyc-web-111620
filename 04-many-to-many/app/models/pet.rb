class Pet 
    attr_accessor :sound, :name
    attr_reader :species
    @@all = []

    def initialize(name, species, sound) 
        @name = name
        @species = species
        @sound = sound
        @@all << self 
    end

    def self.all
        @@all 
    end

    def user_pets # has_many
        # in order to access huge list of UserPet instances, then only get the UserPets 
        UserPet.all.find_all { |up| up.pet == self }
    end

    def owners # has_many through user_pets ^^^^ 
        # could do this w/o defining Pet#user_pets as... 
        #       UserPet.all.find_all { |up| up.pet == self }.map { |up| up.user }
        self.user_pets.map { |up| up.user }
    end

    def best_friends_names
        # returns an array of all the names of all the associated users 
        self.owners.map { |user| user.name }
    end

    def self.all_species
        Pet.all.map do |pet| 
            pet.species 
        end.uniq
    end

end


## HAS MANY CLASS
## does NOT hold a reference to the related instance*s*
## have a method to go through SSOT, the related class
##    and use select/filter/find_all to get only the related instances
