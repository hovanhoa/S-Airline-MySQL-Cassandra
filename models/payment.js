const client = require('./db')

var connection = client.client

exports.getBank = async function () {
    return (await connection.execute('SELECT * FROM bank')).rows;
};

exports.getOneFlight = async function (id) {
    return (await connection.execute(`SELECT * FROM flight WHERE id = ?;`, [id], { prepare: true })).rows;
};

exports.updateSeat = async function (id) {
    await connection.execute(`UPDATE seat SET type = 2 WHERE id = ?`, [id], { prepare: true });
};

exports.insertClientSeat = async function (phone, id, flight_id, price) {
    await connection.execute(`INSERT INTO seat (phone, id, flight_id, price) VALUE (?, ?, ?, ?);`[phone, id, flight_id, price], { prepare: true });
};

exports.insertClient = async function (phone, name, birthday, address, email, bank_name, bank_number) {
    await connection.execute(`INSERT INTO user (phone, name, birthday, address, email, bank_name, bank_number) VALUES (?, ?, ?, ?, ?, ?, ?);`, [phone, name, birthday, address, email, bank_name, bank_number], { prepare: true });
};
