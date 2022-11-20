const client = require('./db')

var connection = client.client

exports.getListFlight = async function (from, to, time) {
    return (await connection.execute(`SELECT * FROM flight WHERE from_airport = ? AND to_airport = ? AND depart LIKE ?;`, [from, to, time], { prepare: true })).rows;
};

exports.getAllFlight = async function () {
    return (await connection.execute(`SELECT * FROM flight;`)).rows;
};

exports.getAllSeat = async function () {
    return (await connection.execute(`SELECT * FROM seat;`)).rows;
};

exports.getOneFlight = async function (id) {
    return (await connection.execute(`SELECT * FROM flight WHERE id = ?;`, [id], { prepare: true })).rows;
};
