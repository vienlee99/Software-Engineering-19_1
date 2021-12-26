const router = require("express").Router();

const teacherContrller = require('../../controllers/teacher/teacherController');

router.get('/', teacherContrller.upload);


module.exports = router;
