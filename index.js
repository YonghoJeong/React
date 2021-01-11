const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chocoba05:Jeongyh0503!@cluster0.qqss5.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('MogoDB Connected....'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕!!!! 나야나')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
fd