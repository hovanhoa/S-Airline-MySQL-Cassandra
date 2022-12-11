const client = require('./db')

var connection = client.client

exports.getAll = async function () {
    return (await connection.execute("SELECT id, from_airport, to_airport, branch, depart, end, price FROM flight")).rows;
};

exports.getAirport = async function () {
    return (await connection.execute("SELECT id, name FROM airport")).rows;
};

exports.getBrand = async function () {
    return (await connection.execute("SELECT id, name FROM brand")).rows;
};


exports.getAccount = async function () {
    return (await connection.execute("SELECT phone, type FROM user")).rows;
};

exports.getTicket = async function () {
    return (await connection.execute("SELECT * FROM seat;")).rows;
};

exports.getBank = async function () {
    return (await connection.execute("SELECT id, name FROM bank")).rows;
};

exports.getSeat = async function () {
    return (await connection.execute("SELECT * FROM seat")).rows;
};

exports.insertOne = async function (id, brand, from, to, depart, end, price) {
    await connection.execute("INSERT INTO flight(id, brand, from_airport, to_airport, depart, end,  price) VALUES (?, ?, ?, ?, ?, ?, ?);", [id, brand, from, to, depart, end, price], { prepare: true });
};

exports.updateOne = async function (id, brand, from, to, depart, end, price) {
    await connection.execute("UPDATE flight SET brand=?, from_airport=?, to_airport=?, depart=?, end=?, price=? WHERE id=?", [brand, from, to, depart, end, price, id], { prepare: true });
};

exports.deleteOne = async function (id) {
    await connection.execute("DELETE FROM flight WHERE id = ?;", [id], { prepare: true });
};

exports.insertAccount = async function (phone, type) {
    await connection.execute("INSERT INTO user(phone, type) VALUES (?, ?);", [phone, type], { prepare: true });
};

exports.updateAccount = async function (phone, type) {
    await connection.execute("UPDATE user SET type = ? WHERE phone = ?;", [type, phone], { prepare: true });
};

exports.deleteAccount = async function (phone) {
    await connection.execute("DELETE FROM account WHERE phone = ?;", [phone], { prepare: true });
};

exports.insertBrand = async function (id, name) {
    await connection.execute("INSERT INTO brand(id, name) VALUES (?, ?);", [id, name], { prepare: true });
};

exports.deleteBrand = async function (id) {
    await connection.execute("DELETE FROM brand WHERE id = ?", [id], { prepare: true });
};

exports.insertAirport = async function (id, name) {
    await connection.execute("INSERT INTO airport(id, name) VALUES (?, ?);", [id, name], { prepare: true });
};

exports.deleteAirport = async function (id) {
    await connection.execute("DELETE FROM airport WHERE id = ?;", [id], { prepare: true });
};

exports.insertBank = async function (id, name) {
    await connection.execute("INSERT INTO bank(id, name) VALUES (?, ?);", [id, name], { prepare: true });
};

exports.deleteBank = async function (id) {
    await connection.execute("DELETE FROM bank WHERE id = ?;", [id], { prepare: true });
};

exports.insertSeat = async function (id, phone, flight_id, type, from_airport, to_airport, price, brand, depart, end) {
    await connection.execute("INSERT INTO seat(id, phone, flight_id, type, from_airport, to_airport, price, brand, depart, end) VALUES (?, ?, ?, ?);", [id, phone, flight_id, type, from_airport, to_airport, price, brand, depart, end], { prepare: true });
};

exports.deleteSeat = async function (flight_id) {
    await connection.execute("DELETE FROM seat WHERE flight_id = ?;", [flight_id], { prepare: true });
};