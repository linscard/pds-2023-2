const mysql = require('mysql2/promise')

const connectionConfigs = {
	host: 'localhost',
	user: 'sammy',
	password: 'password',
	database: 'myTrello'
}


const { myTaskMock } = require('../entities/mock')

function insertData(operation, data) {
	
}
function deleteData(operation, data) {
	
}
function updateData(operation, data) {
	
}


async function getAllData(table) {
	const connection = await mysql.createConnection(connectionConfigs)
	const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`)
	connection.end()

	return rows
}

async function testFunction(params) {
	const rs = await getAllData('users')
	console.log('\n\n\n >>>>>>>>>>>>>>> my results <<<<<<<<<<<<<<<<<<<<<\n\n\n', rs)
}
// testFunction()




module.exports = {
	insertData,
	deleteData,
	updateData,
	getAllData
}