# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying all Instances"
User.destroy_all
WatchList.destroy_all


puts "Creating Humans 👨‍👨‍👧‍👦"
30.times do 
  User.create(name: Faker::FunnyName.name, user_name: Faker::Games::Pokemon.name, age: rand(1..100))
end 

puts "Creating Watch Lists 🍿"
50.times do 
  WatchList.create(user_id: User.all.sample.id, movie_id: Movie.all.sample.id)
end 