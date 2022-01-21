const router = require("express").Router(),
  searchController = require("../../controllers/admin/search");
  const upload = require("../../config/multer.config");

router.post("/", upload.single('product'),async (req, res) => {
  await searchController.search(req, res);
});

router.get("/", (req, res) => {
  console.log("get");

  searchController.index(req, res);
});

module.exports = router;
