const client = require('./db')

var connection = client.client

exports.getBank = async function () {
    return (await connection.execute('SELECT id, name FROM bank')).rows;
};

exports.getOneFlight = async function (id) {
    return (await connection.execute(`SELECT from_airport, to_airport, depart, end FROM flight WHERE id = ?;`, [id], { prepare: true })).rows;
};

exports.updateSeat = async function (id) {
    await connection.execute(`UPDATE seat SET type = 2 WHERE id = ?`, [id], { prepare: true });
};

exports.insertClientSeat = async function (phone, id, flight_id, price) {
    var flight = (await connection.execute(`SELECT from_airport, to_airport, depart, end, brand FROM flight WHERE id = ?;`, [id], { prepare: true })).rows[0];
    await connection.execute(`INSERT INTO seat (phone, id, flight_id, price, brand, to_airport, from_airport, depart, end, type) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`[phone, id, flight_id, price, flight.brand, flight.to_airport, flight.from_airport, flight.depart, flight.end, "0"], { prepare: true });
};
