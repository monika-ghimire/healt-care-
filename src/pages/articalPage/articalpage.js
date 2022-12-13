import React from 'react'
import './articalpage.css'
import img1 from '../../assest/img1.png'
import img4 from '../../assest/img4.png'
import img3 from '../../assest/img3.png'
import Vector2 from '../../assest/Vector2.png'
export default function articalpage() {
  return (
    <>
    <div className='articalpage-cantent-wapper'>
      <img src={Vector2} className='Vector-img'/>
      <div className=''>
        <h3 className='artical -heading'>Check out our latest article</h3>
        <div className='row'>
        <div className='col-4'>
        <div className='artical-wapper'>
            <img src={img4}/>
            <div className='title-wapper'>
            <h5 className='artical-title-heading'>Disease detection, check 
              <br/>
               up in the laboratory
            </h5>
               <p className='artical-title'>
               In this case, the role of the health
               <br/> laboratory is very important to do
               <br/>
                   a disease detection...
               </p>
               </div>
               </div>
          </div>
          <div className='col-4'>
          <div className='artical-wapper'>
            <img src={img1}/>
            <div className='title-wapper'>
            <h5 className='artical-title-heading'>Disease detection, check 
              <br/>
               up in the laboratory
            </h5>
               <p className='artical-title'>
               Herbal medicine is very widely used 
               <br/>  at this time because of its very good
               <br/>
               for your health...
               </p>
               </div>
               </div>
          </div>
          <div className='col-4'>
            <div className='artical-wapper'>
            <img src={img3}/>
            <div className='title-wapper'>

            <h5 className='artical-title-heading'>Disease detection, check 
              <br/>
               up in the laboratory
            </h5>
               <p className='artical-title'>
               In this case, the role of the health
               <br/> laboratory is very important to do
               <br/>
                   a disease detection...
               </p>
            </div>
            </div>
            
            
            
          </div>
        </div>
           <button className='learn-more-btn'>View all</button>
      </div>
    </div>
    </>
  )
}
