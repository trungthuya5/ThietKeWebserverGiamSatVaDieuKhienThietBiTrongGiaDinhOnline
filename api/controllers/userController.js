const db = require('./../db')
const jwt = require('jsonwebtoken')

module.exports = {
    login: (req,res)=>{
        let data = req.body
    
        let sql = 'SELECT * FROM users WHERE username=? AND password=?'
          db.query(sql,[data.username,data.password], (err, response) => {
  
              if (err) return res.json({status:false,msg:err})
              let id = response[0].id    
                let level = response[0].level    
              if(response.length == 0){
                return res.json({status:false,msg:"Sai tài khỏa hoặc mật khẩu"})
              } else {
   
                let token = jwt.sign({"id":id, "level":level}, 'd-auth')
                console.log(token)
                token = token.replace('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.', '')
                return res.json({status:true, data:token})
              }
          })
      },
    get: (req, res) => {
        if (req.user.level != 0) res.json({ status: false, message: "Bạn không có quyền admin" })
        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) res.json({ status: false, message: err })
            res.json({ status:true,data:response })
        })
    },
    detail: (req, res) => {
        let id = parseInt(req.id)
        if (req.level != 0 && req.level != id) res.json({ status: false, message: "Bạn không có quyền try cập" })

        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json({status:true,data:response[0]})
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = parseInt(req.user.id)
        if (req.user.level != 0 && req.user.level != id) res.json({ status: false, message: "Bạn không có quyền try cập" })
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        if (req.user.level != 0) res.json({ status: false, message: "Bạn không có quyền admin" })
        let data = req.body;
        console.log(data)
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) return res.json(err)
            return res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let id = parseInt(req.user.id)
        if (req.user.level != 0 && req.user.level != id) res.json({ status: false, message: "Bạn không có quyền try cập" })
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
}
