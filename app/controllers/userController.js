const db = require('./../db')

module.exports = {
    get: (req, res) => {

        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.rows)
        })
    },
    detail: (req, res) => {
        let id = req.params.id;
        let sql = 'SELECT * FROM users WHERE id = $1'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json(response.rows[0])
        })

    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE users SET password = $1 WHERE id = $2'
        db.query(sql, [data.password, id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        
        data.created_at = new Date()
        console.log(data)
        let sql = 'INSERT INTO users(username,password,fullname,email,phone,created_at) VALUES($1,$2,$3,$4,$5,$6)'
        db.query(sql, [data.username,data.password,data.fullname,data.email,data.phone,data.created_at], (err, response) => {
            if (err) return res.json(err)
            return res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        let sql = 'DELETE FROM users WHERE id = $1'
        db.query(sql, [id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
}
