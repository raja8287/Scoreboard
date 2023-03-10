import React from "react";



function Sing(){
   
   
   
    function Dd(){
var user_t=document.getElementById("st").value;
var user_n=document.getElementById("name").value;
var user_p=document.getElementById("pass").value;
var user_cp=document.getElementById("Cpass").value;
var t={user_t,user_n,user_p,user_cp};

    
    if(!user_t || !user_n || !user_p || !user_cp){
        

        alert("Please fill the blank space")
    }
    else{
        if(user_p===user_cp){
            fetch("http://localhost:4000/postUser",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                     'Content-Type':'application/json'
                },
                body:JSON.stringify(t)
            })




        window.location.href="/login";
        alert("singin succesfuly")
        }
        else{
            alert("PLEASE CHEACK PASSWORD")
        }

    }

}

 




function gto(){
        window.location.href='/login'
    }
    return(
        <>
        <div id='Sin'>
         <select id="st">
            <option>User</option>
         </select>
         <br></br>
        <input type="text" placeholder="Name" id="name"/>
        <br></br>
        <input type="text" placeholder="Password" id="pass"/>
        <br></br>
        <input type="password" placeholder="Confirm Password" id="Cpass"/>
        <br/>
        <button onClick={()=>{Dd()}}>SING IN</button>
        <br></br>
        <i onClick={()=>{gto()}}>Account already exist <u>Login ?</u></i>
        </div>
        
        </>
    );
}

export default Sing;