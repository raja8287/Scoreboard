import React from "react";
import Footer from "./footer";


function Create_game(){
    
  
  


            function PostData(){
              
                var atn=document.getElementById("ATN").value;
                var ato=document.getElementById("ATP1").value;
                var atp=0;
                var ats=0;
                var att=document.getElementById("ATP2").value;
                var btn=document.getElementById("BTN").value;
                var bto=document.getElementById("BTP1").value;
                var btt=document.getElementById("BTP2").value;
                var btp=0;
                var bts=1;
                const p={atn,ato,att,atp,ats,bts,btn,bto,btt,btp ,bts};
            
                if(!atn || !ato || !att || !btn || !bto || !btt){
                    alert("INVALID SUBMISTION")

                
                }
                else{
                    fetch("http://localhost:4000/postda",{
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                             'Content-Type':'application/json'
                        },
                        body:JSON.stringify(p)
                    })

              alert("TEAM CREATED succesfuly")
            }
        }
    
    
            return(

        <>
        <div id="cg">
        <div id="createGame">
            
            <div id="TeamA">
                <h2>TEAM-A </h2>
                <br/>
                <div>
                <img src="" alt="img" id="A-img"/>
                </div>
            
            <div id="Ainput">
            <input type="text" placeholder="Enter team name" id="ATN"/>
            <br/>
            <input type="text" placeholder="Enter Player 1 name" id="ATP1"/>
            <br/>
            <input type="text" placeholder="Enter player 2 name" id="ATP2"/>

            </div>
               
            </div>
        <h2>Vs</h2>

            
            
            <div id="TeamB">
            <h2>TEAM-B</h2>
            <br/>
                <div>
                <img src="#" alt="img" id="B-img"/>
                </div>
               
            <div id="Binput">
            <input type="text" placeholder="Enter team name" id="BTN"/>
            <br/>
            <input type="text" placeholder="Enter Player 1 name" id="BTP1"/>
            <br/>
            <input type="text" placeholder="Enter player 2 name" id="BTP2"/>

            </div>
            
                
            </div>
            
        </div>
        

        <button onClick={()=>{PostData()}}>SUBMIT</button>
    
        
        </div>
        
        </>
        
    );
}

export default Create_game;