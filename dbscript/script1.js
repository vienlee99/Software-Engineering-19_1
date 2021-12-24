// mongo localhost:27017/HTVcorpDB ./dbscript/script1.js

conn = new Mongo();
db = conn.getDB("HTVcorpDB");

db.createCollection("Course")
db.createCollection("Student")
db.createCollection("Teacher")
db.createCollection("TypeUser")
db.createCollection("User")

db.User.insert({
    _id: "123",
    username: 'root',
    password: '123'
})

