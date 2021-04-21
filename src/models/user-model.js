const { Schema, Table, UuidAttribute, TextAttribute } = require("falsetto");

const id = new UuidAttribute("id");
const firstName = new TextAttribute("first_name");
const lastName = new TextAttribute("last_name");
const email = new TextAttribute("email");

const UserSchema = new Schema("user", {
    id,
    firstName,
    lastName,
    email
});

const QueryById = Table.from(UserSchema).by(id);

const QueryByEmail = Table.from(UserSchema).by(email);

module.exports = { UserSchema, QueryById, QueryByEmail };
