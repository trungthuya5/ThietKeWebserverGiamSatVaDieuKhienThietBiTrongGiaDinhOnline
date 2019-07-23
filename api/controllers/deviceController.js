const db = require('./../db')

module.exports = {
    parent: (req,res)=>{
        let pid = req.params.id
        let sql = 'SELECT * FROM devices WHERE pid = ?'
        db.query(sql,[pid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response)
        })
    },
    user: (req,res)=>{
        let uid = req.params.id
        let sql = 'SELECT * FROM devices WHERE uid = ?'
        db.query(sql,[uid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response)
        })
    },
    get: (req,res)=>{
        let uid = req.user.id
        console.log(uid)
        let sql = 'SELECT * FROM devices WHERE uid = ?'
        db.query(sql,[uid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response)
        })
    },
    detail: (req,res)=>{
        let id = req.params.id
        let sql = 'SELECT * FROM devices WHERE id = ?'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })

    },
    update: (req,res)=>{
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE devices SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req,res)=>{
      let data = req.body;
      data.uid = req.user.id
      console.log("da chay vao day")
        let sql = 'INSERT INTO devices SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) return res.json(err)
            return res.json({message: 'Insert success!'})
        })
    },
    delete: (req,res)=>{
      let id = req.params.id;
      let sql = 'DELETE FROM devices WHERE id = ?'
       db.query(sql, [id], (err, response) => {
           if (err) throw err
           res.json({message: 'Delete success!'})
       })
    },
}
