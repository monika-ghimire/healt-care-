import React from 'react'
import './homepage.css'
import Logo from '../../assest/logo.png'
import image1 from '../../assest/imgae1.png'

export default function homepage() {
    return (
        <>
            <div className='container-fulid'>
                {/* this section for nav bar */}
                <section>
                    <div className='topNav-wapper'>
                        <ul>
                            <li><img src={Logo} /></li>
                            <li className='navGroup-wapper' >
                                <ul className='navGroup'>
                                    <li>Home</li>
                                    <li>Find a doctor</li>
                                    <li>Apps</li>
                                    <li>Testimonials</li>
                                    <li>About us</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* content body */}
                <section>
                    <div className='contaier-fulid'>
                    <div className='row content'>
                        <div className='col-6 content-Virtual-healthcare'>
                            <h3 className='Virtual-healthcare-heading '>
                            Virtual healthcare 
                            <br/>
                             for you
                            </h3>
                            <p className='Virtual-healthcare-paragraf'>
                            Trafalgar provides progressive, and affordable 
                            <br/>
                               healthcare, accessible on mobile and online 
                             <br/>
                             for everyone
                            </p>
                            <button className='Consult-today-button'>Consult today</button>
                        </div>
                        <div className='col-6'>
                            <div className='image-holder'>
                                <img src={image1}/>
                            </div>
                        </div>
                    </div>
                    </div>
                  
                </section>

            </div>
        </>
    )
}
