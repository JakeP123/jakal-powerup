const router = require("express").Router();
const boxRoutes = require("./boxes");
// console.log("inside api/index.js")
// box routes
router.use("/boxes", boxRoutes);

module.exports = router;
