const db = require('./../db')

module.exports = {
    get: (req,res)=>{
        
      let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req,res)=>{
        let id = req.params.id;
      let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })

    },
    update: (req,res)=>{
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req,res)=>{
      let data = req.body;
      console.log(data)
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) return res.json(err)
            return res.json({message: 'Insert success!'})
        })
    },
    delete: (req,res)=>{
      let id = req.params.id;
      let sql = 'DELETE FROM users WHERE id = ?'
       db.query(sql, [id], (err, response) => {
           if (err) throw err
           res.json({message: 'Delete success!'})
       })
    },
}
