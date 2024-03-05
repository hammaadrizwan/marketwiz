import React from "react";
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';


function Team(){
    return (
        <section className="h-full index-team">
            <div className="index-team-info">
                <div className="index-team-title">
                    <h1>About Us</h1>
                    <p>Meet the minds behind marketWiz</p>
                </div>
                <div className="index-team-image-frame">
                    <div className="lg:flex-row index-team-image-left">
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