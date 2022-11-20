const bcrypt = require('bcrypt');
const client = require('./db')

var connection = client.client

exports.getOneAccount = async function (phone) {
    return (await connection.execute(`SELECT * FROM user WHERE phone = ?;`, [phone], { prepare: true })).rows;
};

exports.getListFlight = async function (phone) {
    return (await connection.execute(`SELECT * FROM seat WHERE phone = ?;`, [phone], { prepare: true })).rows;
};

exports.updateOne = async function (name, address, phone, email, sex, nationality, birthday) {
    await connection.execute(`UPDATE user SET name = ?, address = ?, email = ?, sex = ?, nationality = ?, birthday = ? WHERE phone = ?;`, [name, address, email, sex, nationality, birthday, phone], { prepare: true });
};
exports.updatePass = async function (password, phone) {
    var pwd = bcrypt.hashSync(password, 10);
    await connection.execute(`UPDATE user SET password = ? WHERE phone = ?;`, [pwd, phone], { prepare: true });
};

exports.getOne = async function (phone) {
    return (await connection.execute(`SELECT * FROM user WHERE phone = ?;`, [phone], { prepare: true })).rows;
};
