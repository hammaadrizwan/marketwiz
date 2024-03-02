import React from "react";

function Contact(){
    return (
        <section className="contact h-full">
            <div className="contact-title">
                <h1>Contact Us</h1>
                <p>Lets Grow your sales together</p>
            </div>
            <div className="contact-items">
                <div className="hidden xl:flex contact-left">
                    <div className="contact-left-items">
                        <div className="contact-left-text">
                            <h1>
                                Request a call from us soon
                            </h1>
                            <p>
                                Expect a meeting link within three days
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-20 contact-right">
                    <div className="contact-right-items">
                        <div className="contact-right-text">
                            <input placeholder="Enter Your Name" ></input>
                            <input placeholder="Enter Your Email" ></input>
                            <a href="#" className="hover:drop-shadow-2xl contact-button">
                                Request
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Contact