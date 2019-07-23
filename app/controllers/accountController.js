'use strict'

const db = require('./../db')
const jwt = require('jsonwebtoken')
module.exports = {
    post: (req, res) => {
        let data = req.body
        
        let sql = 'SELECT * FROM users WHERE username=$1 AND password=$2'
        db.query(sql, [data.username, data.password], (err, table) => {

            if (table.rowCount == 0) res.json({ status: false, msg: "Sai username hoặc password" })
            var user = table.rows[0]
           
            var token = jwt.sign({user}, 'd-auth')
            res.json({ status: true, data: token })
        })

        // db.query("SELECT * FROM users",(err, table)=>{
        //     if(err) res.json(err)
        //     res.json(table.rows)
        // })
    }
}
