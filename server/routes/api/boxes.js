const router = require("express").Router();
const boxesController = require("../../controllers/boxesController");
// console.log("inside boxes")
// Matches with "/api/boxes"
router.route("/")
  .get(boxesController.findAll)

module.exports = router;
