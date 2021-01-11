const express = require('express')
const app = express()
const port = 3000
const {User} = require("./models/User");
const bodyParser = require('body-parser');

//application/x--www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chocoba05:Jeongyh0503!@cluster0.qqss5.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('MogoDB Connected....'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕!!!! 나야나')
})

app.post('/register', (res,res)) => {

//회원 가입할때 필요한 정보들을 client 에서 가져오면
// 그것들을 데이터 베이스에 넣어준다.


const user = new User(req.body)

user.save((err.userInfo)) ==>{

if(err) return res.json({success:false,err})
return res.status(200).json({
  success:true
})

}

}




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
