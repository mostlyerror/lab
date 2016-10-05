require 'mongo'

db_name = 'test'
db_conn_string = "mongodb://localhost:27017/#{db_name}"

db = Mongo::Client.new db_conn_string

# find zips

#puts db.database.name # => "test"
#puts db.database.collection_names

db = db.database

collection = db[:zips]

# Insert Document
doc = {
  name: 'steve',
  hobbies: ['hiking', 'tennis', 'fly fishing' ]
}
result = collection.insert_one doc
puts result.n

docs = [
  doc.merge({ _id: 1 }),
  { _id: 2, name: 'sally', hobbies: ['skiing', 'stamp collecting' ] }
]
result = collection.insert_many docs
puts "inserted #{result.inserted_count} documents"

collection.find.each do |document|
  # => yields a BSON::Document
end

puts collection.find({name: 'sally'}).first



