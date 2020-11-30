class Ownership < ActiveRecord::Base

    # Macros of `belongs_to` give us instance methods related to the associations -> Instance
    belongs_to :neopet
    belongs_to :user

end