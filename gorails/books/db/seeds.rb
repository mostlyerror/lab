# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
  {
    title: "Ender's Game",
    description: "Child hero Ender Wiggin must fight a desperate battle against a deadly alien race if mankind is to survive."
  },
  {
    title: "The Stranger",
    description: "For Meursault, this is an insult to his reason and a betrayal of his hopes; for Camus it encapsulates the absurdity of life."
  }
]);
