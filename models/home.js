const client = require('./db')

var connection = client.client

exports.getListFlight = async function (from, to, time) {
    return (await connection.execute(`SELECT id, from_airport, to_airport, depart, brand, end, price FROM flight WHERE from_airport = ? AND to_airport = ? AND depart LIKE ?;`, [from, to, time], { prepare: true })).rows;
};

exports.getAllFlight = async function () {
    return (await connection.execute(`SELECT id, from_airport, to_airport, depart, brand, end, price FROM flight;`)).rows;
};

exports.getAllSeat = async function () {
    return (await connection.execute(`SELECT id, flight_id, from_airport, brand, to_airport, depart, end, price FROM seat;`)).rows;
};

exports.getOneFlight = async function (id) {
    return (await connection.execute(`SELECT id, from_airport, to_airport, depart, brand, end, price FROM flight WHERE id = ?;`, [id], { prepare: true })).rows;
};
