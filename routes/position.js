const { Router } = require('express')
const position = require('../controllers/positions')
const positionRouter = Router()
positionRouter.patch('/', position.updatePosition)
positionRouter.post('/', position.createPosition)
positionRouter.get('/:id', position.getPositionById)
positionRouter.get('/', position.getAllPositions)
positionRouter.post('/', position.deletePosition)

module.exports = positionRouter