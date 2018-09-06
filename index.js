const getModel = require('./src/model')
const getValidate = require('./src/validate')
exports.plugin = {
  pkg: require('./package.json'),
  register: async function (server, options = {}) {
    const { connection: connectionName = 'default', modelName = 'Frequency', collectionName = 'frequency' } = options
    server.dependency('hapi-mongooses', async () => {
      const { connections, Schema } = server.plugins['hapi-mongooses']
      const connection = connections[connectionName]
      const Model = getModel({ Schema, connection, collectionName, modelName })
      const validate = getValidate(Model)
      server.expose('Model', Model)
      server.expose('validate', validate)
    })
  }
}
