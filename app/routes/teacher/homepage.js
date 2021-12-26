const router = require("express").Router();

const teacherContrller = require('../../controllers/teacher/teacherController');

router.get('/search', teacherContrller.search);
router.get('/', teacherContrller.index);


module.exports = router;
