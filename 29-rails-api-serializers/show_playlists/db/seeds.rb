# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


genre = ["Action", "Comedy", "Romance"]

10.times do 
  User.create(name: Faker::FunnyName.name, tagline: Faker::Movies::BackToTheFuture.quote, fav_genre: genre.sample)
end 


10.times do 
  Playlist.create(name: Faker::Games::ClashOfClans.troop, motto: Faker::Books::Dune.quote, user_id: User.all.sample.id)
end 


50.times do 
  Show.create(title: Faker::Movie.title, genre: genre.sample, season: rand(1..15), playlist_id: Playlist.all.sample.id)
end 