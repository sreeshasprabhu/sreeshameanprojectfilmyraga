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

adminSchema = new Schema( {	
		
	
	uname:String,
    pass:String
})
var Admindata = mongoose.model('Admindata', adminSchema);

module.exports = Admindata;