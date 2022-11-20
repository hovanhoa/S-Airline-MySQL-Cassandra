const cassandra = require('cassandra-driver')

const client = new cassandra.Client({
    keyspace: 'airline',
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1'
})

exports.client = client