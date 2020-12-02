class Book < ActiveRecord::Base
    has_many :book_orders
    has_many :orders, through: :book_orders
end