
use HTVcorpDB

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

// Open mongosh and ...
// load("script1.js")
// mongo localhost:27017/HTVcorpDB script1.js