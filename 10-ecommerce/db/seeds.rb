Book.create(name: "Harry Potter", author: "JK Rowling", price: rand(100))
Book.create(name: "Goosebumps", author: "RL Stine", price: rand(100))
Book.create(name: "Magic Tree House", author: "Mary Pope Osborne", price: rand(100))
Book.create(name: "Animorphs", author: "K. A. Applegate", price: rand(100))

eric = User.create(username: "Eric", password: "abc123")

past_order1 = Order.create(checked_out: true, user_id: eric.id)
past_order2 = Order.create(checked_out: true, user: eric)
current_order = Order.create(checked_out: false, user: eric)

2.times do 
    BookOrder.create(order: past_order1, book: Book.all.sample)
end

3.times do 
    BookOrder.create(order: past_order2, book: Book.all.sample)
end