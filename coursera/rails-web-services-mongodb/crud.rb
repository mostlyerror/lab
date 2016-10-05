require 'mongo'

db_conn_string = 'mongodb://localhost:27017'
db_name = 'test'

client = Mongo::Client.new db_conn_string

db = client.use db_name

# find zips
puts db.database.name # => "test"



