import React from 'react';
import image from '../assets/images/right.png'

function Info() {
    return (
        <section className="info">
            <div className="info-items">
                <div className='info-left'>
                    <div className='info-left-items'>
                        <div className='info-left-text'>
                            <h3>AI powered sales prediction</h3>
                            <h1>
                            Revolutionizing the supermarket industry.
                            </h1>
                            <h2>
                            Predict sales using weather with accuracy and enhance stock management now!
                            </h2>
                        </div>
                        <a  href="#" className='info-button font-semibold hover:text-white hover:bg-black'>Get started</a>
                    </div>
                </div>
                <div className='hidden xl:flex info-right'>
                    <img src={image} alt='' />
                </div>
            </div>
        </section>
    )
  }
  export default Info