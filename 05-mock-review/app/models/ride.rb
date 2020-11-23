class Ride

    attr_reader :driver, :passenger, :distance
    @@all = []

    def initialize(driver, passenger, distance)
        @driver = driver
        @passenger = passenger
        @distance = distance
        @@all << self
    end

    def self.all
        @@all
    end

    def self.average_distance
        total_distance = @@all.map do |ride|
            ride.distance
        end.sum 
        # if @@all.size > 0 
            total_distance / @@all.size.to_f
        # else
        #     0
        # end
    end

end