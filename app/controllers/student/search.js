class StudentSearch {
  index(req, res) {
    let a=[]
    // req.course= Object.values(req.course)
    // console.log(req.course)
    // if(req.course.length){
      req.course.map(x=>{
        let temp={};
        temp._id=x._id.toString();
        temp.name=x.name;
        temp.cost=x.cost;
        // temp.imagePath=x.imagePath;
        a.push(temp)
        return x;
      })
    // }
    let msg='';
    if (a.length==0) {
      msg = 'Không tìm thấy khóa học theo yêu cầu!'
    }
    console.log(a)
    res.render("student/search", {
      layout: "student/layout1",
      course: a,
      msg:msg,
      path: "/search",
    });
  }
}

module.exports = new StudentSearch();
