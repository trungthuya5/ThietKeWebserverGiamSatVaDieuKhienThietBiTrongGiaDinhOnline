const db = require('./../db')
const jwt = require('jsonwebtoken')

module.exports = {
    login: (req, res) => {
        let sql = 'SELECT * FROM admin WHERE username=? AND password=?'
        db.query(sql, [req.body.username, req.body.password], (err, response) => {
            if (err) throw err
            if (response.length) {
                let user = response[0]
                let token = jwt.sign({ user }, 'd-auth')
                res.json({ status: true, data: token })
            } else {
                res.json({ status: false, msg: "sai tài khoản hoặc mật khẩu" })
            }


        })
    },
    get: (req, res) => {
        let sql = 'SELECT * FROM admin'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM admin WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })

    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE admin SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO admin SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })

    },
    delete: (req, res) => {
        let sql = 'DELETE FROM admin WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
}
