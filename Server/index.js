const app=require('./app')
const http = require('http')
const config=require('./utils/config')
const logger=require('./utils/logger')

const server=http.createServer(app)

server.listen( process.env.PORT || 3001, () => {
  logger.info(`Server running on port ${config.PORT}`)
})