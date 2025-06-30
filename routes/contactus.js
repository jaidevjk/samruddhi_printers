const express = require("express");
const {
  createContactEnquiry,

} = require("../controller/contactusController.js");
//const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createContactEnquiry);
module.exports = router;