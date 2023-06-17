const { Router } = require('express')
const candidateRouter = Router()
const candidate = require('../controllers/candidates')
candidateRouter.post('/', candidate.createCandidate)
candidateRouter.patch('/', candidate.updateCandidate)
candidateRouter.get('/:id', candidate.getSingleCandidate)
candidateRouter.get('/:positionId', candidate.getCandidatePosition)
candidateRouter.post('/', candidate.deleteCandidate)

module.exports = candidateRouter