const cassandra = require("cassandra-driver");

const client = new cassandra.Client({
    contactPoints: ['cassandra'],
    localDataCenter: 'datacenter1',
    keyspace: 'ks1'
});

module.exports = client;