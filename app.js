var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const session = require('express-session')
var middleware = require('socketio-wildcard')();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('publics'))

io.use(middleware);


let routes = require("./api")
let db = require("./api/db")
routes(app)
app.get("/", (req, res) => {
    return res.render("index")
})

app.get('/dangnhap', (req, res) => {
    return res.render('dangnhap')
})

app.get('/add', (req, res) => {
    return res.render("add")
})

app.get('/show1',(req,res)=>{
    db.query("SHOW TABLES",(err,rows)=>{
        if(err) return res.json(err)
        return res.json(rows)
    })
})

app.get('/install',(req,res)=>{
    require('mysql-import').config({
        host: 'localhost',
        user: 'nhdie_thuynt',
        password: 'Misg64~5',
        database: 'nhdie6px_dktt',
        onerror: err=>console.log(err.message)
    }).import(__dirname+'/doantotnghiep.sql').then(()=> {
        console.log('all statements have been executed')
    });
    // require('mysql-import').config({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'tests',
    //     onerror: err=>console.log(err.message)
    // }).import(__dirname+'/doantotnghiep.sql').then(()=> {
    //     console.log('all statements have been executed')
    // });
    
    res.send("ok")
})

io.on('connection', function (socket) {
    console.log(socket.id)
    socket.on('*', function (packet) {
        console.log("event: " + packet.data[0])
        console.log("data: " + packet.data[1])

        io.emit(packet.data[0], packet.data[1])
        // let sql = "SELECT * FROM devices WHERE code=?"

        db.query("UPDATE INTO devices SET data=? WHERE code=?", [packet.data[1],packet.data[0]], (err, table2) => {
            socket.emit(packet.data[0], packet.data[1])
        })

    });

    // socket.on('chat message', function(msg){
    //   io.emit('chat message', msg);
    // });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});

