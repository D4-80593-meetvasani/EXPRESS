const express = require('express')
const homeController = require('../controllers/home.controller')


const homeRouter  = express.Router();

homeRouter.get('/' , homeController.getMessages)
homeRouter.post('/' , homeController.postMessage )

module.exports = homeRouter

