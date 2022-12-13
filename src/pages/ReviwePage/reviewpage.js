import React from 'react'
import './reviwepage.css'
import userimg from '../../assest/userImg.png'
import arrownav from '../../assest/arrownav.png'
export default function reviewpage() {
  return (
    <>
    <div className='reviewpage-content-warrper'>
    
    <div className='reviewpage-box'>
        <h4>What our customer are saying</h4>
        <div className='row user-detalis-holder'>
            <div className='col-6'>
                <ul >
                    <li><img src={userimg}/></li>
                    <li className='user-data'><p className='user-name'>Edward Newgate</p>
                        <p className='user-postion'>
                        Founder Circle
                        </p>
                    </li>
                </ul>
            </div>

            <div className='col-6'>
                <p className='user-reviwe'>
                “Our dedicated patient engagement app
                <br/> and 
                 web portal allow you to access information
                 <br/> instantaneously (no tedeous form, long calls, <br/>
                 or administrative hassle) and securely”
                </p>
            </div>

        </div> 
           
    </div>
    <div className='arrownav-img'><img src={arrownav}/></div>

    </div>
    
    </>
  )
}
