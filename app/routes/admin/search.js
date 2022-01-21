const router = require("express").Router();
searchController = require("../../controllers/admin/search");

router.get("/", (req, res) => {
  searchController.index(req, res);
});

router.post("/", async (req, res) => {
  await searchController.search(req, res);
});

module.exports = router;
