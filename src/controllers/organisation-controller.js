const uuid = require("uuid").v4;
const { OrganisationSchema, QueryByID } = require("../models/organisation-model");
const client = require("../connection");

module.exports = {
    createOrganisation,
    getOrganisation
};

async function createOrganisation(req, res) {

    const { name } = req.body;

    const id = uuid();

    const response = await OrganisationSchema.put({ name, id }).execute(client);

    res
        .status(201)
        .json(response);
}

async function getOrganisation(req, res) {

    const { id } = req.params;

    const response = await QueryByID
        .get()
        .where("id")
        .equals(id)
        .execute(client);

    res.status(200).json(response);

};




