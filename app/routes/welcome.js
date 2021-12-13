const router = require("express").Router(),
  welcomeController = require("../controllers/welcomeController");

router.get("/", (req, res) => {
  welcomeController.index(req, res);
});

module.exports = router;
