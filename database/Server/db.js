const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 8889,
    user: 'genius',
    password: '1234567', 
    database: 'Movie'
})

// router.post("/create", (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const ssn = req.body.ssn;
//     const type = req.body.type;
  
//     db.query(
//       "INSERT INTO member(name, age, ssn, licence_type) VALUES (?, ?, ?, ?)",
//       [name, age, ssn, type],
//       (error, results) => {
//         if (error) {
//           throw error;
//         } else {
//           res.send("Data inserted");
//         }
//       }
//     );
//   });
  
  // router.get("/", (req, res) => {
  //   db.query("SELECT * FROM Movie", (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // });
  
//   router.put("/update", (req, res) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     db.query(
//       "UPDATE member SET name = ? WHERE id = ?",
//       [name, id],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });
  
//   router.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM member WHERE id = ?", id, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });
  
  module.exports = db;

// db.query('select 1',(err,results) =>{
//     if(err) return console.log(err.message)
//     console.log(results)
// })

// const sqlStr = 'select name, description from Movie'
// db.query(sqlStr,(err,results) =>{
//     if(err) return console.log(err.message)
//     console.log(results)
// })