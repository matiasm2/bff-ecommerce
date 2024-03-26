const path = require('path')

module.exports = {
  mode: 'production',
  entry: './bin/www',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'server.js'
  },
  target: 'node'
}
