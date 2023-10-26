const {getAllData} = require('../dbAdaptors/dbUtils')


async function getAllTasks(id) {
	// Validate something
	return await getAllData('users')
}

module.exports = {
	getAllTasks
}