const express=require('express')
const app=express()
const port=process.env.port ||4000;
const DataModel=require('./db_Config')
const user_dataModel=require("./log&sin_db_config")
const cors=require('cors')
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

//user log & sin detail

app.get("/getuser",async(req,resp)=>{
  let data= await user_dataModel.find();
  console.log(data)
  resp.send(data);
})

app.post("/postUser",async(req,resp)=>{
  console.log(req.body)
  let data=await user_dataModel({  user_type:req.body.user_t, user_name:req.body.user_n ,pass:req.body.user_p,c_pass:req.body.user_cp});
  let s=await data.save();
  console.log("user post api===",s)
  resp.send("user post")
}) 
app.post("/verUser",async(req,resp)=>{
  console.log(req.body)
  resp.send("user verification")
})

//match info
app.get("/getda",async(req,resp)=>{
    const data= await DataModel.find()
    console.log(data)
    resp.send(data)
})
app.post("/postda",async(req,resp)=>{
    console.log(req.body)
    let data= await DataModel({atn:req.body.atn, atp1:req.body.ato, atp2:req.body.att,atnp:req.body.atp, ats:req.body.ats ,btn:req.body.btn, btp1:req.body.bto, btp2:req.body.btt,btnp:req.body.btp,bts:req.body.bts});
  let rs=await data.save()
    console.log("data",rs)
    resp.send("hello")
})



//api for deleting the match
app.delete("/Delda",async(req,resp)=>{
  console.log("deletion request:",req.body);
  let data=await DataModel.deleteOne({_id:req.body.match});
  resp.send("delete");
})


//api for score updation
app.put("/putda_a",async(req,resp)=>{

  console.log(req.body);
let data=await DataModel.updateOne({atn:req.body.atn},{
  $set:{atnp:req.body.atp}
})
  
  resp.send("put api")
})

app.put("/putda_b",async(req,resp)=>{

  console.log(req.body);
let data=await DataModel.updateOne({btn:req.body.btn},{
  $set:{btnp:req.body.btp}
})
  
  resp.send("put api")
})


app.put("/puts_a",async(req,resp)=>{
  console.log(req.body);
  let data=await DataModel.updateOne({atn:req.body.t},{
    $set:{ats:req.body.ats}
  })
  resp.send("servie");
})

app.put("/puts_b",async(req,resp)=>{
  console.log(req.body);
  let data=await DataModel.updateOne({btn:req.body.t},{
    $set:{bts:req.body.bts}
  })
  resp.send("servie");
})

app.listen(port,()=>{
console.log(`Api is runing on ${port}`)
})