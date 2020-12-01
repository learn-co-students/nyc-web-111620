class Application

    attr_reader :prompt
    attr_accessor :user

    def initialize
        @prompt = TTY::Prompt.new
    end

    def welcome 
        puts "Hello, Welcome to Neopets!"
        puts "😻😻😻😻😻"
    end

    def ask_user_for_login_or_register

        # WAY 1 #
        # What you see is what you get

        # answer = prompt.select("Would you like to register or login?", ["Register", "Login"])



        # WAY 2 #
        # [{"WHAT THE USER SEES" => "WHAT THE PROGRAM SEES"}]

        # arr_of_hashes = [
        #     {"Register" => 0},
        #     {"Login" => 1}        
        # ]
        # all_pets = Neopet.all.map do |neopet|
        #     {neopet.name => neopet.id}
        # end

        # answer = prompt.select("Would you like to register or login?", arr_of_hashes)
        # answer -> 0 or 1




        # Way 3 #
        # Invoke a method after a choice has been made

        prompt.select("Would you like to register or login?") do |menu|
            menu.choice "Register", -> {register_helper}
            menu.choice "Login", -> {login_helper}
        end

        # binding.pry


        # PUTS/GETS.CHOMP WAY #

        # puts "Would you like to register or login?"
        # answer = gets.chomp
        # if answer == "login"
        #     self.login_helper()
        # elsif answer == "register"
        #     register_helper
        # else
        #     puts "You mistyped"
        # end
    end


    def login_helper
        User.login_a_user
    end

    def register_helper
        User.register_a_user
    end

    def main_menu
        user.reload
        # Gets the most up to date info about the user
        
        system 'clear'
        # "clears" the terminal

        # sleep 5
        # Wait 5 seconds and then execute
        prompt.select("Welcome, #{user.username}! What do you want to do?") do |menu|
            menu.choice "See my pets", -> {see_my_pets}
            menu.choice "See all pets", -> {see_all_pets}
            menu.choice "Smell you later", -> {smell_you_later}
            # menu.choice "WHAT USER SEES", -> {HELPER_METHOD }
        end
    end


    def see_all_pets
        # WRITE THE LOGIC TO DISPLAY ALL PETS
        # GO BACK TO THE MAIN_MENU AFTERWARDS?
    end

    def see_my_pets
        user.introduce_all_pets
        main_menu
    end

    def smell_you_later
        puts "Smell you later, thanks for coming to my application"
    end
end