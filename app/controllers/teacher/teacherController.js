const Course = require("../../models/courseModel")

class TeacherContrller {

    // [GET] / teacher
    index(req, res, next){
        res.render("teacher/dashboard", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [GET] /teacher/search
    search(req, res, next){
        res.send('teacher/search')
    }

    // [GET] /teacher/mycourses
    mycourses(req, res, next){
        Course.find({}).lean()
        .then(courses => {
            (res.render("teacher/mycourses", {
                layout: "teacher/teacher_layout",
                path: req.originalUrl.split("?").shift()+'dashboard',
                courses: courses
              }))
        })
        .catch(next);
    }

    // [GET] /teacher/edit
    edit(req, res, next){
        Course.findById(req.params.id).lean()
        .then(courses => {
            (res.render("teacher/edit", {
                layout: "teacher/teacher_layout",
                path: req.originalUrl.split("?").shift()+'dashboard',
                courses: courses
            }))
        })
        .catch(next);  
    }

    // [GET] /teacher/upload
    upload(req, res, next){
        res.render("teacher/upload", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [GET] /teacher/pickadate
    pickadate(req, res, next){
        res.render("teacher/pickadate", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [POST] /teacher/store
    store(req, res, next){
        const formData = req.body;
        const courses = new Course(formData);
        courses.save()
            .then(() => res.redirect('mycourses'))
            .catch(error => {

            })
    }
}

module.exports = new TeacherContrller;
