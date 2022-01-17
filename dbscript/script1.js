// mongo localhost:27017 ./dbscript/script1.js

conn = new Mongo();
db = conn.getDB("HTVcorpDB");

db.createCollection("courses")
db.createCollection("students")
db.createCollection("teachers")
db.createCollection("users")

db.users.insert(
    [{
        "_id": {
          "$oid": "61e41cecad13e252ddde3241"
        },
        "username": "root",
        "password": "$2b$10$UCaXZw6DL6Y1JrWZFRPvtODvd2Z1Apr0hcHrPXH2fyKS0GHK8kabi",
        "mobilephone": "0812540145",
        "typeuserId": 0,
        "remainningBalance": 0
      },{
        "_id": {
          "$oid": "61e41d50ad13e252ddde3242"
        },
        "username": "student1",
        "password": "$2b$10$Oin/4k5Euk8ItT4Gbmlk8OU7f47fBsjm1yRPFyE/Pe9Hl0rRjQjga",
        "mobilephone": "0812540149",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T07:00:46.815Z"
        }
      },{
        "_id": {
          "$oid": "61e41d65ad13e252ddde3243"
        },
        "username": "teacher1",
        "password": "$2b$10$rg9ZyRzQ.u66uHvM4LtD5.Ls/vvtxAgqYKcdjHojSr8oRIoyHYk8W",
        "mobilephone": "0812540141",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T07:00:46.815Z"
        }
      },{
        "_id": {
          "$oid": "61e41d72ad13e252ddde3244"
        },
        "username": "student2",
        "password": "$2b$10$LVwUEObyxiK4EujJYPHB0uNYE1rw.VEhRprLozJWjDb4eBRe7TSTy",
        "mobilephone": "0812546924",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T13:03:44.750Z"
        }
      },{
        "_id": {
          "$oid": "61e41d8bad13e252ddde3245"
        },
        "username": "teacher2",
        "password": "$2b$10$4a7z5MPOz4yl9Ox1TkD6EeonFH01CPd2mJA9XYvBn2HAolunIBzjO",
        "mobilephone": "0812540849",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T13:03:44.750Z"
        }
      },{
        "_id": {
          "$oid": "61e41d97ad13e252ddde3246"
        },
        "username": "teacher3",
        "password": "$2b$10$iAF9Wez7YFsk.HF8bOOoTeIm91PQzG5xvHJdQ46Io5L5HScnVyXYi",
        "mobilephone": "0812540194",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T13:03:44.750Z"
        }
      },{
        "_id": {
          "$oid": "61e41da2ad13e252ddde3247"
        },
        "username": "student3",
        "password": "$2b$10$6uNJqGIPKe3/Z/XQHlr9YOwLV2Qe7lO6Wf3AL4S.DUy.DRh.Uc5sO",
        "mobilephone": "0886540146",
        "typeuserId": 2,
        "remainningBalance": 0,
        "createdDate": {
          "$date": "2022-01-16T13:03:44.750Z"
        }
      }]
      )






