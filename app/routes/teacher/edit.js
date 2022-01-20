const router = require("express").Router();

const teacherContrller = require('../../controllers/teacher/teacherController');

router.get('/:id', teacherContrller.edit);
// router.get('/', teacherContrller.edit);


module.exports = router;
