const router = require("express").Router();

const teacherContrller = require('../../controllers/teacher/teacherController');

router.post('/', teacherContrller.store);


module.exports = router;
