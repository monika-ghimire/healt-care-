import React from 'react'
import './footer.css'

export default function footerpage() {
  return (
   <>

   <div className='footer-contnent-wappeer contaier-fulid'>
    <div className='row'>
       <div className='col-md-4'>
        <div className='icons-t'><h4 className='footer-heading'>Trafalgar</h4></div>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible 
            <br/>on mobile and online 
            <br/>for everyone</p>
            <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
       </div>
       <div className='col-2  left'>
        <h4>Company</h4>
        <p>About</p>
        <p>Testimonials</p>
        <p>Find a doctor</p>
        <p>Apps</p>
    </div>
    <div className='col-2 left'>
        <h4>Region</h4>
        <p> Indonesia</p>
        <p>Singapore</p>
        <p>Hongkong</p>
        <p>Canada</p>
    </div>
    <div className='col-2 left'>
        <h4>Help</h4>
        <p>Help center</p>
        <p> Contact support</p>
        <p>Instructions</p>
        <p>How it works</p>
    </div>
    </div>

    

   </div>
   </>
  )
}
