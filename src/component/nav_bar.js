import React, { useEffect, useState } from "react";

import { Link, Route, Routes } from 'react-router-dom';
import Create_game from "./creategame";
import Home from "./HOME";
import Login from "./login";
import Match from "./match";
import Sing from "./sign";
import Eor from "./Unk";

 function Nav_bar(data_from_login){

console.log(data_from_login,"geting data from nav bar")
const da=sessionStorage.getItem("userType");
function ddd(){
  console.log("ddd function called")
}

  function C(){

    
    var c=document.getElementById("ham").style.display;
    if(c==="none"){
      document.getElementById("ham").style.display="block";
      document.getElementById("ha1").style.display="none"
      document.getElementById("ha2").style.display="block";
    

    }
    else{
      document.getElementById("ham").style.display="none";
      document.getElementById("ha1").style.display="block";
      document.getElementById("ha2").style.display="none";

      
    }

    document.getElementById("g").style.display="none";
    document.getElementById("hm").style.display="none";
    document.getElementById("H").style.display="none";
    
    if(da=="Admin"){
      console.log("Welcome admin")
      document.getElementById("H").style.display="block";
      document.getElementById("hm").style.display="block";

    
    }
   
 else if(da=="User"){
      console.log("Welcome user")
      document.getElementById("hm").style.display="block";
      document.getElementById("g").style.display="block";


    }
    else {
      document.getElementById("g").style.display="none";
      document.getElementById("hm").style.display="none";
      document.getElementById("H").style.display="none";
    }

    

}





 

    return(
      <>

      <div id="ham-d">
      <span id="ha1" onClick={()=>{C()}} >&#9776;</span>
      <span id="ha2" onClick={()=>{C()}} style={{display:"none"}}>&#215;</span>
      </div>
      <br/>
<div id="ham" style={{display:"none"}}>


<div id="H" style={{display:"none"}}>
        <Link to='/home' id="hom">Home</Link>
        </div>


        <div id="hm" >     
        <Link to='/match' id="hlm">LIVE match </Link> 
       
        </div>


        <div id="g" >
          <Link to='/CreatG'>CREATE GAME</Link>
          </div>

        <div> <Link to='/'>Login</Link></div>

</div>

      <div id="navbar">
        
        <div id="Nm">     
        <Link to='/match'>LIVE match</Link></div>
        <div id="Ncg"><Link to='/CreatG'>CREATE GAME</Link></div>
        <div id="Nl"> <Link to='/login'>Login</Link></div>

 
      </div>
      <Routes>
      <Route path="*" element={<Eor/>}/>
        <Route path="/home" id="log" element={<Home />}/>
        <Route path="/match" element={<Match />}/>
        <Route path="/CreatG" id="ccg" element={<Create_game/>}/>
        <Route path="/" element={<Login Nav_bar={Nav_bar} C={C} d={Nav_bar} />}/>
        <Route path="/singin" element={<Sing/>}/>

      </Routes>
      </>

    );

}

export default Nav_bar;