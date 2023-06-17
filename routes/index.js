const { Router } = require('express')
const candidate=require('./candidates')
const voters=require('./voters')
const postions=require('./position')
const appRouter = Router()
appRouter.use('/candidates',candidate)
appRouter.use('/voters',voters)
appRouter.use('/positions',positions)


module.exports=appRouter