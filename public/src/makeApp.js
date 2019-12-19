const express = require('express')
const SwaggerParser = require('swagger-parser')
const swaggerRoutes = require('swagger-routes-express')
const api = require('./api')
const makeApp = async () => {
    const parser = new SwaggerParser()
    const apiDescription = await parser.validate('my-api.yml')
    const connect = swaggerRoutes(api, apiDescription)
    const app = express()
    // do any other app stuff,
    // such as wire in passport, use cors etc.
    // then connect the routes
    connect(app)
    // add any error handlers last
    return app
}
module.exports = makeApp