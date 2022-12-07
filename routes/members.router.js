const express = require('express')
const membersController = require('../controllers/members.controllers')

const membersRouter  = express.Router();

membersRouter.use((req,res,next) => {
    console.log('ip address' ,req.ip);
    next();
})
membersRouter.post('/', membersController.postMember)
membersRouter.get('/' , membersController.getMembers)
membersRouter.get('/:memberId' , membersController.getMember )  

module.exports = membersRouter