const mongooes=require('mongoose')
const Url='mongodb://localhost:27017/scoreboard';

mongooes.connect(Url);
const DataSchema=new mongooes.Schema({
    user_type:String,
    user_name:String,
    pass:String,
    c_pass:String
    
  
    

});

module.exports= mongooes.model('detail_user',DataSchema);