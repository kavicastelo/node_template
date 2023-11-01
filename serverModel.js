const mongoose = require('mongoose');

function createModel(schemaDefinition, modelName) {
    const schema = new mongoose.Schema(schemaDefinition);
    return mongoose.model(modelName, schema);
}

module.exports = createModel;