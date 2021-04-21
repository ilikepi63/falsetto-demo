const { OrganisationSchema } = require("../models/organisation-model");
const { UserSchema } = require("../models/user-model");
const connection = require("../connection");

OrganisationSchema
    .createTables()
    .execute(connection)
    .catch(console.error);

UserSchema
    .createTables()
    .execute(connection)
    .catch(console.error);


