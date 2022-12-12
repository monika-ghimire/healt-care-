import React from 'react'
import './provider.css'
import Provider1 from '../../assest/provider1.png'
import Provider2 from '../../assest/provider2.png'

export default function providerpage() {
    return (
        <div className='provider-content-wapper'>
            <div className='row'>
                <div className='col-6 '>
                    <div className='provider-images-holder'>
                        <img src={Provider1} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='provider-explation'>
                        <h3 className='providers-headind'>Leading healthcare
                            <br />providers</h3>
                        <p className='providers-explation'>
                            Trafalgar provides progressive, and affordable
                            <br /> healthcare, accessible on mobile and online for
                            <br /> everyone. To us, it’s not just work. We take pride
                            <br />
                            in the solutions we deliver
                        </p>
                        <button className='learn-more-btn'>Learn More</button>
                    </div>

                </div>
            </div>

            {/* second provider */}
            <div className='row'>
                <div className='col-6'>
                    <div className='provider-explation'>
                        <h3 className='providers-headind'>Download our 
                            <br />mobile apps</h3>
                        <p className='providers-explation'>
                        Our dedicated patient engagement app 
                        <br/>and 
                         web portal allow you to access information
                         <br/> instantaneously (no tedeous form, long calls, 
                             <br/>
                         or administrative hassle) and securely
                        </p>
                        <button className='learn-more-btn'>Download ↓</button>
                    </div>

                </div>
                <div className='col-6 '>
                    <div className='provider-images-holder'>
                        <img src={Provider2} />
                    </div>
                </div>
            </div>

        </div>
    )
}
