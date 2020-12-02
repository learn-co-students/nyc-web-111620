class Order < ActiveRecord::Base
    belongs_to :user

    has_many :book_orders
    has_many :books, through: :book_orders

    def total_price
        # self.books.map do |book|
        #     book.price
        # end.sum
        self.books.sum(:price)
    end
    
end