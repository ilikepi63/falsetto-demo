const { Router } = require("express");
const { getUser, createUser } = require("../controllers/user-controller");

const router = Router();

router.get("/:id", getUser);

router.post("/", createUser);

module.exports = router;