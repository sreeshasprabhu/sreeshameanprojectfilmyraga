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

var NewRagaSchema = new Schema({
    
    filmSong : String,
    language:String,
    film: String,
    musicDirector : String,
    raga : String,
    

    
});

var RagaData = mongoose.model('RagaData', NewRagaSchema);                        //UserData is the model and NewBookData is the schema

module.exports = RagaData;