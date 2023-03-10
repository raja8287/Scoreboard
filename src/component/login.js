import React, { Component, useEffect, useState } from "react";
import Match from "./match";

function Login(props){


    const [user_data,setUD]=useState([]);
  
  function fun(ut){
    console.log("fun called")
    props.Nav_bar(ut);
    props.C(ut);

  }

 
    function p(ut){
    var c=document.getElementById("ty").value;
    var n=document.getElementById("log_name").value;
    var p=document.getElementById("log_pass").value;
    const g={c,n,p};

if(!c || !n || !p){
//    window.location.href='/CreatG';
alert('please enter valid input')
}
else{   
    fetch("http://localhost:4000/getuser",{
        method:'GET',

    })
    .then((result)=>result.json())
    .then((data)=>setUD(data));
    user_verif();

}



    }

    
function goto(){
    window.location.href='/singin'
}


function user_verif(){
    
    
    var ut=document.getElementById("ty").value;
    var na=document.getElementById("log_name").value;
    var pa=document.getElementById("log_pass").value;
  for(const key in user_data){
   if(user_data[key].user_type !==ut || user_data[key].user_name !==na || user_data[key].pass !==pa){
    document.getElementById("ty").style.border="2px solid red";

    document.getElementById("log_name").style.border="2px solid red";
    document.getElementById("log_pass").style.border="2px solid red";
    
    continue;
  }

else{
        fun();
    document.getElementById("ty").style.border="2px solid green";
    document.getElementById("log_name").style.border="2px solid green";
    document.getElementById("log_pass").style.border="2px solid green";
    alert("Matched");
    document.getElementById("logout").style.display="inline-block";

    if(ut=="Admin"){
            sessionStorage.setItem("userType",ut)
           
            document.getElementById("logout").style.display="inline-block";

        
        //window.location.href='/';
    }
     else if(ut=="User"){
        sessionStorage.setItem("userType",ut)

        
        document.getElementById("logout").style.display="inline-block";

        
      // window.location.href='/CreatG';

    }
    break;
    
    }

   


}




}

function Out_user(){
    
    if(sessionStorage.getItem("userType")){
        sessionStorage.removeItem("userType")

    alert("Logout successfully");
    

}
else{
    alert("Please LoGIN First");
}    
}



    return(
        <>
        
        <div id="login">
            <div id="logd">
            <select id="ty">
                <option >Admin</option>
                <option>User</option>
            </select>
            <br/>
            <input type="text" placeholder="Enter your name" id="log_name"/>
            <br/>
            <input type="text" placeholder="Enter your password" id="log_pass"/>
            <br></br>
            <button onClick={()=>p()}>Login</button>
            <button id="logout"  onClick={()=>{Out_user()}}>LogOut</button>
          
            <br></br>
            <i onClick={()=>{goto()}}>Have you <u>Singin ?</u></i>
            </div>
        </div>
        </>
    );
}

export default Login;