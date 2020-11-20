class UserPet
    attr_accessor :user, :pet, :nickname
    @@all = []

    def initialize(user, pet)
        @user = user
        @pet = pet
        @nickname = nickname
        self.class.all << self ##self.class.all
    end

    def self.all
        @@all
    end
end


## BELONGS TO CLASS
## will hold the reference to the related instance (SSOT)
## initialize with the related instance
## remember the related instance w/ an instance variable
## expose that info with attr_macros (reader, writer)