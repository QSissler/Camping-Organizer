puts "seeding trip data"
t1 = Trip.create(destination: "Firefly Music Festival")
t2 = Trip.create(destination: "Green Ridge State Forest")



puts "seeding user data"
u1 = User.create(username: "Kate", password: "kate1")
u2 = User.create(username: "Alex", password: "alex1")
u3 = User.create(username: "Stanley", password: "stanley1")
u4 = User.create(username: "Quinn", password: "quinn1")


puts "seeding item data"
i1 = Item.create!(name: "Tent", category: "general camping gear", packed: false, trip_id: t1.id, user_id: u2.id)
i3 = Item.create!(name: "Hot Dogs", category: "food", packed: false, trip_id: t1.id, user_id: u3.id)
i4 = Item.create!(name: "Canopy", category: "general camping gear", packed: false, trip_id: t1.id, user_id: u4.id)


puts "seeding complete!"
