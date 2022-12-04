var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "flight_ticket_booking",
});

exports.getAllFlight = async function () {
    return await connection.awaitQuery(`SELECT * FROM flight;`);
};

exports.getAllSeat = async function () {
    return await connection.awaitQuery(`SELECT * FROM seat;`);
};

exports.getOneFlight = async function (id) {
    return await connection.awaitQuery(`SELECT * FROM flight WHERE id = "${id}";`);
};
