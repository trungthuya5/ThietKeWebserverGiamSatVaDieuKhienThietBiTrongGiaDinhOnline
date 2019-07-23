const db = require('./../db')

module.exports = {
    parent: (req, res) => {
        let pid = req.params.id
        let sql = 'SELECT * FROM rooms WHERE pid = $1'
        db.query(sql, [pid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response.rows)
        })
    },
    user: (req, res) => {
        let uid = req.params.id
        let sql = 'SELECT * FROM rooms WHERE uid = $1'
        db.query(sql, [uid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response.rows)
        })
    },
    get: (req, res) => {
        let uid = req.query.uid
        let sql = 'SELECT * FROM rooms WHERE uid = $1'
        db.query(sql, [uid], (err, response) => {
            if (err) return res.json(err)
            return res.json(response.rows)
        })
    },
    detail: (req, res) => {
        let id = req.params.id
        let sql = 'SELECT * FROM rooms WHERE id = $1'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json(response.rows[0])
        })

    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE rooms SET name=$1, des=$2 WHERE id = $3'
        db.query(sql, [data.name, data.des, id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        console.log(data)
        let sql = 'INSERT INTO rooms(uid,pid,name,des,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6)'
        db.query(sql, [data.uid,data.pid,data.name,data.des, new Date(), new Date()], (err, response) => {
            if (err) return res.json(err)
            return res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        let sql = 'DELETE FROM rooms WHERE id = $1'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
}
