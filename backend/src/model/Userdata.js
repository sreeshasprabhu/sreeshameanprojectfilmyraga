const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ragas',{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('Db connected');
});
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('error in db connection'+err)
    }
})
const Schema = mongoose.Schema;

userSchema = new Schema( {	
		
	
	name:String,
	email: String,
	password: String,	
	phone:Number
})
var Userdata = mongoose.model('Userdata', userSchema);

module.exports = Userdata;