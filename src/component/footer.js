import React from 'react'

function Footer() {
  return (
    <>

     <div className='footer'>
     <div className='social_media' style={{display:'flex' ,justifyContent:'center',margin:'0px 0px'}}>
     <a href='https://www.facebook.com/login'><i className='fa fa-facebook'></i></a> 
      <a href='https://www.instagram.com/login'><i className='fa fa-instagram'></i></a>
      <a href='https://www.whatsapp.com/'><i className='fa fa-whatsapp'></i></a>
      <a href='https://www.google.com/'><i className='fa fa-google'></i></a>
      <a href='https://www.youtube.com/watch?v=AL8-TiZFgmw&ab_channel=RealHit'><i className='fa fa-youtube'></i></a>
      <a href='https://www.reddit.com/new'><i className='fa fa-reddit'></i></a>
    

     </div>
     <div className="right">

      <p>
        ALL RIGHT RESERVED|
      <i>&#169;</i>

      </p>
      
     </div>
     </div>
    </>
   
  )
}

export default Footer