import Nav_bar from "./nav_bar";

function Home(){

    
    return(
        <>
        <div id="h">

        
        <h3 style={{color:"white"}}>UPDATE SCOREBOARD</h3>
        <div id="home">
            
            <div id="s">
            <div id="A">
            <div id="A-de">
            <h3>TEAM A</h3>
            <p>score:200</p></div>
            
                <button>service</button>
                <br/>
                <div className="btnscr">
                <button><b> +</b></button>
                <button><b>  -</b></button></div>
            
        </div>
        
        <i>VS</i>
        <br/>
      
        <div id="B">
            <h3>TEAM B</h3>
        <p>score:200</p>
        
            <button>service</button>
            <br/>
            <div className="btnscr">
            <button><b>+</b></button>
                
                <button><b>-</b></button>
            </div>
                
        
        </div>

            </div>
         
        
        <button id="up" style={{background:'lightgreen',color:"black"}}>UPDATE</button>
          
 
        </div>
        </div>
        
        </>
    );
}


export default Home;