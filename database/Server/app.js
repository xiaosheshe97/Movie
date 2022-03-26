const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());



const router = require('./router')
app.use('/api',router)

app.listen(9000, () => {
  console.log("Server is running on 9000");
});