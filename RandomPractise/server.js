
const http = require('http')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()


createServer.listen(PORT, () => `Listening to the Port ${PORT}`)