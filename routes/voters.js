const { Router } = require('express')
const voterRouter = Router()
const voter = require('../controllers/voters')
voterRouter.post('/', voter.createVoter)
voterRouter.patch('/', voter.updateVoter)
voterRouter.get('/:id', voter.getVoterById)
voterRouter.get('/', voter.getAllVoter)
voterRouter.post('/', voter.deleteVoter)

module.exports = voterRouter