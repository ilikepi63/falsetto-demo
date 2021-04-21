const { Table, Schema, UuidAttribute, TextAttribute } = require("falsetto");

const id = new UuidAttribute("id");
const name = new TextAttribute("name");

const OrganisationSchema = new Schema("organisation", {
    id: id,
    name: name
});

const QueryByID = Table.from(OrganisationSchema).by(id);

const QueryByName = Table.from(OrganisationSchema).by(name);


module.exports = {
    OrganisationSchema,
    QueryByID,
    QueryByName
};
