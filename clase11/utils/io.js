const { Server } = require('socket.io')

const init = (httpServer) => {
  const io = new Server(httpServer)

  return io
}

// module.exports = io

module.exports = init