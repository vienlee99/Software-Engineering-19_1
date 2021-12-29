class TeacherContrller {

    // [GET] / teacher
    index(req, res, next){
        res.render("teacher/dashboard", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [GET] /teacher/search
    search(req, res){
        res.send('teacher/search')
    }

    // [GET] /teacher/mycourses
    mycourses(req, res, next){
        res.render("teacher/mycourses", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [GET] /teacher/edit
    edit(req, res, next){
        res.render("teacher/edit", {
            layout: "teacher/teacher_layout",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
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
}

module.exports = new TeacherContrller;