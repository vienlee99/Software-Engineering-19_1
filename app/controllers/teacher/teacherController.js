class TeacherContrller {

    // [GET] / teacher
    index(req, res, next){
        // res.render('signin');
        res.render("admin/dashboard", {
            layout: "admin/layout1",
            path: req.originalUrl.split("?").shift()+'dashboard',
          });
    }

    // [GET] /teacher/search
    search(req, res){
        // res.render('search');
        res.send('teacher/search')
    }

    // [GET] /teacher/mycourses
    mycourses(req, res){
        res.send('teacher/mycourses')
    }

    // [GET] /teacher/edit
    edit(req, res){
        res.send('teacher/edit')
    }

    // [GET] /teacher/upload
    upload(req, res){
        res.send('teacher/upload')
    }

    // [GET] /teacher/pickadate
    pickadate(req, res){
        res.send('teacher/pickadate')
    }
}

module.exports = new TeacherContrller;