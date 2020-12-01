# Write in the data that needs to be populated within our database
# puts "Hello, I'm creating some Neopets..."

Neopet.destroy_all
User.destroy_all
Ownership.destroy_all

# CREATE #
######

meerca = Neopet.new(name: "Meerca", weight: 23)
meerca.save
scorchy = Neopet.create(name: "Scorchio", weight: 28)


eric = User.create(username: "Eric", password: "abc123", age: 11)
rianna = User.create(username: "Rianna", password: "abc123", age: rand(100))


Ownership.create(color: "Green", neopet_id: meerca.id, user_id: eric.id)

Ownership.create(color: "Red", neopet_id: meerca.id, user_id: rianna.id)
Ownership.create(color: "Rainbow", neopet_id: scorchy.id, user_id: rianna.id)

# READ #
######

# .find(PRIMARY ID) -> Returns an instance or FAILS
# the_pet_with_id_of_two = Neopet.find(2)

# .find_by(hash_of_attributes) -> Returns an instance OR nil
the_first_meerca = Neopet.find_by(name: "Meerca", weight: 23)

# .where(has_of_attributes) -> Returns an array OR []
all_meercas = Neopet.where(name: "Meerca")


# UPDATE #
######

# the_first_meerca.weight = 100
# the_first_meerca.save

# the_first_meerca.update(weight: 105)
# Neopet.first.update(name: "Meerca The First")


# DELETE #
######

# Neopet.find(1).destroy
# Neopet.destroy(2)

puts "Data seeded!"