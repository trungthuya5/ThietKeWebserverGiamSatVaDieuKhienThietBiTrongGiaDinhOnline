'use strict'

const jwt = require('jsonwebtoken')
let common = require("./common")
let user = require('./controllers/userController')
let adminController = require('./controllers/adminController')
let room = require('./controllers/roomController')
let device = require('./controllers/deviceController')
let product = require('./controllers/productController')
module.exports = function (app) {

    app.get("/api/token",(req,res)=>{
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        return res.json(token)
    })

    app.get("/api/test",common.ensureToken, (req,res)=>{
        return res.send(req.token)
    })
    
    app.post('/api/user/login', user.login)

    app.route('/api/users')
        .get(common.ensureToken,user.get)
        .post(common.ensureToken,user.store)

    app.route('/api/user')
        .get(common.ensureToken,user.detail)
        .put(common.ensureToken,user.update)
        .delete(common.ensureToken,user.delete)
        
    app.get('/api/roombyparent/:id', room.parent)
    app.get('/api/roombyuser/:id', room.user)

    app.route('/api/rooms')
        .get(room.get)
        .post(room.store)

    app.route('/api/room/:id')
        .get(room.detail)
        .put(room.update)
        .delete(room.delete)

    app.post("/api/admin/login",adminController.login)
    
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
        .get(common.ensureToken,device.get)
        .post(common.ensureToken,device.store)

    app.route('/api/device/:id')
        .get(common.ensureToken,device.detail)
        .put(common.ensureToken,device.update)
        .delete(common.ensureToken,device.delete)

    app.route('/api/products')
        .get(product.get)
        .post(product.store)

    app.route('/api/product/:id')
        .get(product.detail)
        .put(product.update)
        .delete(product.delete)
}
