class Passenger

    attr_reader :name
    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def rides
        # select gives us a subarray
        Ride.all.select do |ride_instance|
            ride_instance.passenger == self
        end
    end

    def drivers
        # [<Ride>, <Ride>] -> [<Driver>, <Driver>]
        rides.map do |ride|
            ride.driver 
        end
    end

    def total_distance
        # [<Ride>, <Ride>] -> [2.1, 3.4]
        all_distances = self.rides.map do |ride|
            ride.distance
        end
        # [2.1, 3.4] -> 5.5
        all_distances.sum
    end


    def self.premium_members
        @@all.select do |passenger|
            passenger.total_distance() > 100
        end
    end

end