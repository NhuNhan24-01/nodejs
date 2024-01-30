
const express = require('express')
const UserController = require('../controller/user.controller.js')
const router = express.Router()
router.post('/users', UserController.createUser)
router.get('/users',UserController.getList)
router.get('/users/:id',UserController.getInformation)
router.put('/users/:id',UserController.updateInformation)
router.delete('/users/:id', UserController.deleteInformation)
router.get('/users-with-parameter', UserController.usersWithParameter)
router.post('/users-with-body',UserController.usersWithBody )
module.exports = router;


