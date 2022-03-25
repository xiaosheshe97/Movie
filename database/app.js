const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 8889,
    user: 'genius',
    password: '1234567', 
    database: 'Movie'
})

db.query('select 1',(err,results) =>{
    if(err) return console.log(err.message)
    console.log(results)
})

const sqlStr = 'select * from Movie'
db.query(sqlStr,(err,results) =>{
    if(err) return console.log(err.message)
    console.log(results)
})