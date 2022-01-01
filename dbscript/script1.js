// // mongo localhost:27017 ./dbscript/script1.js

// conn = new Mongo();
// db = conn.getDB("HTVcorpDB");

// db.createCollection("Course")
// db.createCollection("Student")
// db.createCollection("Teacher")
// db.createCollection("TypeUser")
// db.createCollection("User")

// db.TypeUser.insert({
//     _id: "0",
//     name: 'admin',
// })
// db.TypeUser.insert({
//     _id: "1",
//     name: 'teacher',
// })
// db.TypeUser.insert({
//     _id: "2",
//     name: 'student',
// })

// db.User.insert({
//     _id: "123",
//     username: 'root',
//     password: '123',
//     mobilephone: '0812540145',
//     typeuserId: 0,
//     remainningBalance: 0,
// })


// mongo localhost:27017 ./dbscript/script1.js

conn = new Mongo();
db = conn.getDB("HTVcorpDB");

db.createCollection("courses")
db.createCollection("students")
db.createCollection("teachers")
db.createCollection("typeusers")
db.createCollection("users")

db.typeusers.insert({
    _id: "0",
    name: 'admin',
})
db.typeusers.insert({
    _id: "1",
    name: 'teacher',
})
db.typeusers.insert({
    _id: "2",
    name: 'student',
})

db.users.insert({
    username: 'root',
    password: '123456',
    mobilephone: '0812540145',
    typeuserId: 0,
})







