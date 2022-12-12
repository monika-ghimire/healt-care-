import React from 'react'
import './servicepage.css'
import Group from '../../assest/Group.png'
import Group2 from '../../assest/Group2.png'
import group4 from '../../assest/group4.png'
import Frame1 from '../../assest/Frame1.png'
import Frame2 from '../../assest/Frame2.png'
import Frame3 from '../../assest/Frame3.png'
export default function servicepage() {
  return (
   <>
   <div className='contend-holder'>
    <section>
    <p className='Our-services-heading'>Our services</p>
     <div className='Our-services-heading-line'></div>
     <p className='Our-services-paragraf'>
     We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
     <br></br> with our highly qualified doctors you can consult with us which type of service is suitable for your health
     </p>
    </section>


    <section>
        <div className='our-services-content-box-holder'>
           <div className='row'>
            <div className='col'>
                <div className='box'>
                    <img src={Group}/>
                    <p className='box-heading'>Search doctor</p>
                    <p className='box-pragraf'>
                    Choose your doctor from thousands
                    <br/> of specialist, general, and trusted
                    <br/> hospitals
                    </p>
                </div>
            </div>
            <div className='col'>
                <div className='box'>
                <img src={Group2}/>
                    <p className='box-heading'>Online pharmacy</p>
                    <p className='box-pragraf'>
                    Buy your medicines with our mobile
                    <br/> application with a simple delivery 
                    <br/> system
                    </p>
                </div>
            </div>
            <div className='col'>
                <div className='box'>
                <img src={group4}/>
                    <p className='box-heading'>Consultation</p>
                    <p className='box-pragraf'>
                    Free consultation with our trusted
                    <br/>doctors and get the best 
                    <br/> recomendations
                    </p>
                </div>
            </div>
           </div>
             {/* secondRow */}
        <div className='row bottom'>
            <div className='col'>
                <div className='box'>
                    
                    <img src={Frame1 } />
                    <p className='box-heading'>Search doctor</p>
                    <p className='box-pragraf'>
                    Choose your doctor from thousands
                    <br/> of specialist, general, and trusted
                    <br/> hospitals
                    </p>
                </div>
            </div>
            <div className='col'>
                <div className='box'>
                <img src={Frame2 } />
                    <p className='box-heading'>Search doctor</p>
                    <p className='box-pragraf'>
                    Choose your doctor from thousands
                    <br/> of specialist, general, and trusted
                    <br/> hospitals
                    </p>
                </div>
            </div>
            <div className='col'>
                <div className='box'>
                <img src={Frame3} />
                    <p className='box-heading'>Search doctor</p>
                    <p className='box-pragraf'>
                    Choose your doctor from thousands
                    <br/> of specialist, general, and trusted
                    <br/> hospitals
                    </p>
                </div>
            </div>
           </div>


        </div>

         <button className='learn-more-btn'>Learn More</button>
    </section>

    
    
   </div>
   </>
  )
}
