import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import Login from "./login";


function Match(){
    
    

const pro=sessionStorage.getItem("userType");

    const [info,setData]=useState([3])
    useEffect(()=>{
        
    getinfo();
        grant();
        
    },[])




  function getinfo(){
    fetch("http://localhost:4000/getda",{
            method:'GET',

        })
        .then((result)=>result.json())
        .then((data)=>setData(data));

  }
  







    function grant(){
       
    if(pro=="Admin"){
        alert("Welcome admin");
        document.getElementById("Match").style.display="none";
        document.getElementById("ad-home").style.display="flex";
        document.getElementById("adp").style.display="block";

    }
 else if(pro=="User"){
        alert("Welcome User")
        document.getElementById("ad-home").style.display="none";
        document.getElementById("Match").style.display="flex";
document.getElementById("adp").style.display="none";
    //   document.getElementById("Match").style.display="block";

            

    }
    
   }

function updateScore_i_a(data,id){
 

    var scor=data;
    scor=scor+1;
    alert(scor);
    alert(id)
    fetch("http://localhost:4000/putda_a",{
        method:'PUT',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({atp:scor,atn:id})
    })
    
}

function updateScore_d_a(data,id){


    var scor=data;
    if(scor>0){
        scor=scor-1;

        fetch("http://localhost:4000/putda_a",{
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({atp:scor,atn:id})
        })
        alert(scor);
    alert(id)
    }
   else{
        alert("Can't update")
   }
    
   
    
}

function updateScore_i_b(data,id){

    

    var scor=data;
    scor=scor+1;
    alert(scor);
    alert(id)
    fetch("http://localhost:4000/putda_b",{
        method:'PUT',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({btp:scor,btn:id})
    })
    
}
function updateScore_d_b(data,id){


    var scor=data;
    if(scor>0){
        scor=scor-1;

        fetch("http://localhost:4000/putda_b",{
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({btp:scor,btn:id})
        })
        alert(scor);
    alert(id)
    }
   else{
        alert("Can't update")
   }
    
   
    
}

function Deletematch(Match_id){
    
    var conf=window.confirm(`Confirm the deletion of ${Match_id}`);
    if(conf===true){

    fetch("http://localhost:4000/Delda",{
        method:'DELETE',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({match:Match_id})
    })}
    
}



function serviePtr_a(data,tn){
    
if(data==0){
    data=data+1;
    fetch("http://localhost:4000/puts_a",{
        method:'PUT',
        headers:{
            'Accept':'application/json',
             'Content-Type':'application/json'
        },
        body:JSON.stringify({ats:data,t:tn})
    })
}
else{
    data=data-1;
    fetch("http://localhost:4000/puts_a",{
        method:'PUT',
        headers:{
            'Accept':'application/json',
             'Content-Type':'application/json'
        },
        body:JSON.stringify({ats:data,t:tn})
    })
}

}

function serviePtr_b(data,tn){
    
    if(data==0){
        data=data+1;
        fetch("http://localhost:4000/puts_b",{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                 'Content-Type':'application/json'
            },
            body:JSON.stringify({bts:data,t:tn})
        })
    }
    else{
        data=data-1;
        fetch("http://localhost:4000/puts_b",{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                 'Content-Type':'application/json'
            },
            body:JSON.stringify({bts:data,t:tn})
        })
    }
    
    }




function schanger(data){
    if(data==1){
        document.getElementById("serva").style.color="green";
        document.getElementById("serva").style.background="green";
      

        document.getElementById("servb").style.color="white";
        document.getElementById("servb").style.background="white";
        
        

    }
    else{
        document.getElementById("servb").style.color="green";
        document.getElementById("servb").style.background="green";
       
        document.getElementById("serva").style.color="white";
        document.getElementById("serva").style.background="white";

    }
    
}



    
    return(
    
        <>
     
        <div id="hime"><h2>LIVE MATCH'S</h2></div>
        
        <div id="Match" >
            
        
        {info.map((data,index)=>{
            return(
                <>
            <div id="ts" >
                <span>Match No. {index+1}</span>
            
            <div style={{border:"2px solid white",background:"rgb(114, 114, 255)"}}>
                
            
            <b>{data.atn}:<span style={{fontSize:"30px"}}>{data.atnp}</span></b>
         
            <p id="serva" className="sea">servie {data.ats}</p>
            
            </div>
            
            
            <i>Vs</i>
            <div style={{border:"2px solid white",background:"rgb(255, 79, 79)"}}>
                
            <b>{data.btn}:<span style={{fontSize:"30px"}}>{data.btnp}</span> </b>
            <p id="servb" className="seb">servie {data.bts}</p>
            
            </div>
            
            <button onClick={()=>{getinfo();schanger(data.ats)}}>refresh</button>
        </div>
        
</>
                
            )
        })}


     
        </div>
        <h2 id="adp">Admin Window</h2>
            <div id="ad-home"  >
           
        {info.map((data,index)=>{
            return(
                <>
            <div id="ts-ad">
                
                <span>Match No. {index+1}</span>
                <br></br>
                <button className="p" style={{color:"red" , background:"white"}} onClick={()=>{Deletematch(data._id);getinfo()}}>
                    
                    delete </button>
            
            <div style={{border:"1px solid white"}}> 
                
                <button className="p" onClick={()=>{updateScore_i_a(data.atnp,data.atn);getinfo()}}>+</button>
            <b>{data.atn}:{data.atnp}</b>
            <button className="m" onClick={()=>{updateScore_d_a(data.atnp,data.atn);getinfo()}} >-</button>
            <p onClick={()=>{serviePtr_a(data.ats,data.atn);serviePtr_b(data.bts,data.btn);getinfo()}}>servie {data.ats}</p>
            
            </div>
            
            
            <i>VS</i>
            <div style={{border:"1px solid white"}}>
                <button className="p"  onClick={()=>{updateScore_i_b(data.btnp,data.btn);getinfo()}}>+</button>
            <b>{data.btn}:{data.btnp} </b>
            <button className="m" onClick={()=>{updateScore_d_b(data.btnp,data.btn);getinfo()}}>-</button>
            <p onClick={()=>{serviePtr_b(data.bts,data.btn);serviePtr_a(data.ats,data.atn);getinfo()}}>servie {data.bts}</p>
            
            </div>
            
       
        </div>
        
</>
                
            )
        })}
    
            
        </div>
        </>
    );
}

export default Match;