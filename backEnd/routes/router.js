var express = require('express');
var router = express.Router();
const { getAllTasks } = require('../businesCases/taskCases')

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/task/create', (req, res) => {
  res.send('Hello World!')
})

router.get('/task/delete', (req, res) => {
  res.send('Hello World!')
})

router.get('/task/edit', (req, res) => {
  res.send('Hello World!')
})

router.get('/task/getall', async (req, res) => {
  res.send(await getAllTasks(2))
})


module.exports = router