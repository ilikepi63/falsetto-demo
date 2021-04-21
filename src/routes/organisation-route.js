const { Router } = require("express");
const { createOrganisation,
    getOrganisation } = require("../controllers/organisation-controller");

const router = Router();

// Get an organisation with a specific id
router.get("/:id", getOrganisation);

// Create an organisation
router.post("/", createOrganisation);

module.exports = router;