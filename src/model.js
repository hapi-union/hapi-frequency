'use strict'
module.exports = ({ Schema, connection, collectionName, modelName }) => {
  return connection.model(
    modelName,
    new Schema({
      from: String,
      to: String,
      sign: String
    }, {
      timestamps: {
        updatedAt: false
      },
      collection: collectionName,
      strict: false
    })
  )
}
