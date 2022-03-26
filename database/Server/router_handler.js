const db = require('./db')

exports.getAllMovies = (req,res)=>{
    const sqlStr = "SELECT * FROM Movie"
    db.query(sqlStr,(err,results)=>{
        if(err) return res.send({status:1, message:err.message})
        res.send(results)
    })
}