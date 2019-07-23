'use strict'

const jwt = require('jsonwebtoken')
let common = require("./common")
let userController = require('./controllers/userController')
let adminController = require('./controllers/adminController')
let account = require('./controllers/accountController')
let room = require('./controllers/roomController')
let device = require('./controllers/deviceController')
let product = require('./controllers/productController')

module.exports = function (app) {

    app.post('/api/login', account.post)

    app.route('/api/users')
        .get(userController.get)
        .post(userController.store)

    app.route('/api/user/:id')
        .get(userController.detail)
        .put(userController.update)
        .delete(userController.delete)

    app.get('/api/roombyparent/:id', room.parent)
    app.get('/api/roombyuser/:id', room.user)

    app.route('/api/rooms')
        .get(room.get)
        .post(room.store)

    app.route('/api/room/:id')
        .get(room.detail)
        .put(room.update)
        .delete(room.delete)

    app.route('/api/admin')
        .get(adminController.get)
        .post(adminController.store)

    app.route('api/admin/:id')
        .get(adminController.detail)
        .put(adminController.update)
        .delete(adminController.delete)

    app.get('/api/devicebyparent/:id', device.parent)
    app.get('/api/devicebyuser/:id', device.user)

    app.route('/api/devices')
        .get(device.get)
        .post(device.store)

    app.route('/api/device/:id')
        .get(device.detail)
        .put(device.update)
        .delete(device.delete)

    app.route('/api/products')
        .get(product.get)
        .post(product.store)

    app.route('/api/product/:id')
        .get(product.detail)
        .put(product.update)
        .delete(product.delete)
}
