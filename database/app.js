
var mysql = require('mysql')

var con = mysql.createConnection({ host: 'localhost', user: 'genius',password: '1234567', database: 'Movie', port: 8889 })


con.connect((err) => {
    if (err) console.log('bad luck')
    else {
        console.log('db connected')
    }
})
