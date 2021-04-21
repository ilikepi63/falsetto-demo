const { QueryByEmail, QueryById, UserSchema } = require("../models/user-model");
const uuid = require("uuid").v4;
const client = require("../connection");

module.exports = {
    getUser,
    createUser,
}

async function getUser(req, res) {

    const { id } = req.params;

    let response;

    if (!id) {

        const { email } = req.query;

        response = await QueryByEmail.get().where("email").equals(email).execute(client);

    } else {
        response = await QueryById.get().where("id").equals(id).execute(client);
    }

    res.status(200).json(response);

}

async function createUser(req, res) {

    const { firstName, lastName, email } = req.body;

    const id = uuid();

    await UserSchema.put({ email, firstName, lastName, id }).execute(client);

    res.status(201).json({ message: "Success" });

}
