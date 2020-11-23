class Driver

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
        Ride.all.select do |ride|
            ride.driver == self
        end
    end

    def passengers
        self.rides.map do |ride|
            ride.passenger()
        end
    end

    def passenger_names
        # self.rides.map do |ride|
        #     ride.passenger.name
        # end.uniq

        # OR

        pass_names = self.passengers.map do |passenger_inst|
            passenger_inst.name
        end
        pass_names.uniq
    end

    def total_distance
        self.rides.map do |ride|
            ride.distance
        end.sum
    end


    def self.mileage_cap(dist_arg)
        @@all.select do |driver|
            driver.total_distance > dist_arg
        end
    end


end