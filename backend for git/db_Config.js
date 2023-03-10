const mongooes=require('mongoose')
const Url='mongodb://localhost:27017/scoreboard';

mongooes.connect(Url);
const DataSchema=new mongooes.Schema({
    atn:String,
    atp1:String,
    atp2:String,
    atnp:Number,
    ats:Number,

    btn:String,
    btp1:String,
    btp2:String,
    btnp:Number,
    bts:Number



});

module.exports= mongooes.model('MatchDetails',DataSchema);