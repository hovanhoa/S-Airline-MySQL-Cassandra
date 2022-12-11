const client = require('./db')

var connection = client.client

exports.insertOne = async function (phone, name, password, type, time) {
    await connection.execute(`INSERT INTO user (phone, name, password, type, create_time) VALUES (?, ?, ?, ?, ?);`, [phone, name, password, type, time], { prepare: true });
};

// exports.getClient = async function (phone) {
//     return await connection.execute(`SELECT * FROM user WHERE phone = '${phone}';`);
// };

exports.getOne = async function (phone) {
    return (await connection.execute(`SELECT phone, name, password, type FROM user WHERE phone = ?;`, [phone], { prepare: true })).rows
};

exports.updatePass = async function (phone, pass) {
    await connection.execute(`UPDATE user SET password = ? WHERE phone = ?;`, [pass, phone], { prepare: true });
};
