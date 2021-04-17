const express = require('express');
const RagaData = require('./src/model/Ragadata');
const UserData = require('./src/model/Userdata');
const AdminData = require('./src/model/AdminData');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.urlencoded({extended:true})); 
app.use(express.json());

function verifyToken(req,res,next){
    if(!req.headers.authorization)
    {
        return res.status(401).send('unauthorized request')
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token ==='null')
    {
       return res.status(401).send('unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey')
    console.log(payload)
    if(!payload)
    {
       return res.status(401).send('unauthorized request')
    }
    req.userId=payload.subject
    next()
}
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var song = {       
        filmSong : req.body.song.filmSong,
        language:req.body.song.language,
        film : req.body.song.film,
        musicDirector : req.body.song.musicDirector,
        raga : req.body.song.raga
        
   }       
   var song = new RagaData(song);
   song.save();
});
app.post('/user',function(req,res){
   
    console.log(req.body);
   
    var user = {       
        name : req.body.user.name,
        email:req.body.user.email,
        password: req.body.user.password,        
        phone: req.body.user.phone    
	}       
   var user = new UserData(user);
   user.save();
});
app.get('/ragas',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    RagaData.find()
                .then(function(songs){
                    res.send(songs);
                });
});
app.get('/user',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    UserData.find()
                .then(function(users){
                    res.send(users);
                });
});
app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      RagaData.findOne({"_id":id})
      .then((product)=>{
          res.send(product);
      });
  })
  app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      UserData.findOne({"_id":id})
      .then((product)=>{
          res.send(product);
      });
  })
app.post('/login', (req, res) =>{
	console.log(req.body);
	UserData.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				//req.session.userId = data._id;
				//console.log(req.session.userId);
				// res.send({ "Success": "Success!" });
				//res.redirect('/welcome');
               
                let payload={subject:data.name+data.password}
                let token =jwt.sign(payload,'secretkey')
                res.status(200).send({token});

			} else {
				//res.send({ "Success": "Wrong password!" });
                res.status(401).send('Wrong password');

			}
		} else {
			//res.send({ "Success": "This Email Is not regestered!" });
            res.status(401).send('This Email Is not regestered');

		}
	});
});

app.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    filmSong= req.body.filmSong,
    language=req.body.language,
    film =req.body.film,
    musicDirector=req.body.musicDirector,
    raga= req.body.raga
   RagaData.findByIdAndUpdate({"_id":id},
                                {$set:{filmSong : filmSong ,
                                    language:language,
                                    film:  film,
                                    musicDirector : musicDirector,
                                    raga :  raga }})
   .then(function(){
       res.send();
   })
 });
 app.put('/upd',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    naame= req.body.name,
    email=req.body.email,
    phone=req.body.phone,
   password=req.body.password,
   
   UserData.findByIdAndUpdate({"_id":id},
                                {$set:{name:naame,
                                   email:email,
                                    password:  password,
                                   phone: phone
                                    }})
   .then(function(){
       res.send();
   })
 })
 app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    RagaData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  app.delete('/rem/:id',(req,res)=>{
   
    id = req.params.id;
    UserData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  app.post('/admin', (req, res) =>{
	console.log(req.body);
	AdminData.findOne({ uname: req.body.uname }, (err, data) => {
		if (data) {

			if (data.pass == req.body.pass) {
				//console.log("Done Login");
				//req.session.userId = data._id;
				//console.log(req.session.userId);
				// res.send({ "Success": "Success!" });
				//res.redirect('/welcome');
               
                let payload={subject:data.uname+data.pass}
                let token =jwt.sign(payload,'secretkey')
                res.status(200).send({token});

			} else {
				//res.send({ "Success": "Wrong password!" });
                res.status(401).send('Wrong password');

			}
		} else {
			//res.send({ "Success": "This Email Is not regestered!" });
            res.status(401).send('This Email Is not regestered');

		}
	});
});
 
app.listen(3000, function(){
    console.log('listening to port 3000');
  });
  
