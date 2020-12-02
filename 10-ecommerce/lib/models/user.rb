class User < ActiveRecord::Base
    has_many :orders

    def past_orders
        orders.where(checked_out: true)
    end

    def current_cart
        orders.find_or_create_by(checked_out: false)
    end

    def check_out_current_cart
        puts "Welcome, #{self.username}!"
        puts "Here are all the books you have in your current cart:"

        self.display_cart

        puts "Let's check out!"
        self.current_cart.update(checked_out: true)
    end

    def display_cart
        self.current_cart.book_orders.each do |book_order|
            puts "ID: #{book_order.id}) #{book_order.book.name}"
        end
    end

    def add_book_to_cart(book_inst)
        BookOrder.create(order: self.current_cart, book: book_inst)
    end

    def remove_book_from_cart(book_inst)
        # Shaky 
        # Preferred way is to pass in an instance of a book_order and delete that 
        book_order = self.current_cart.book_orders.find_by(book_id: book_inst.id)
        book_order.destroy
    end

    def remove_book_from_cart2(book_order_id)
        BookOrder.destroy(book_order_id)
    end


end