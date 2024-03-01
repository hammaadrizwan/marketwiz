import React from "react";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

function Team(){
    return (
        <section className="h-full team">
            <div className="team-info">
                <div className="team-title">
                    <h1>About Us</h1>
                    <p>Meet the minds behind marketWiz</p>
                </div>
                <div className="team-image-frame">
                    <div className="lg:flex-row team-image-left">
                        <img className="drop-shadow-md hover:drop-shadow-2xl" src={image1} alt="" />
                        <img  className="drop-shadow-md hover:drop-shadow-2xl" src={image2} alt="" />
                        <img  className="drop-shadow-md hover:drop-shadow-2xl" src={image3} alt="" />
                        <img  className="drop-shadow-md hover:drop-shadow-2xl" src={image4} alt="" />
                    </div>
                    
                    
                </div>
            </div>
            
        </section>
    )

}
export default Team