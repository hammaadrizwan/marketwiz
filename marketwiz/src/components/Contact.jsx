import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ju696k4', 'template_eqxraq7', form.current, '5HZUZQiNHYtX31zFR')
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
    }

    return (
        <section className="contact h-full">
            <div className="contact-title">
                <h1>Contact Us</h1>
                <p>Let's Grow your sales together</p>
            </div>
            <div className="contact-items">
                <div className="hidden lg:flex contact-left">
                    <div className="contact-left-items">
                        <div className="contact-left-text">
                            <h1>Request a call from us soon</h1>
                            <p>Expect a meeting link within three days</p>
                        </div>
                    </div>
                </div>
                <div className="mx-20 contact-right">
                    <div className="contact-right-items">
                        <form ref={form} className="contact-right-text" onSubmit={sendEmail}>
                            <input className="contact-form-input" placeholder="Enter Your Name" name="name"></input>
                            <input className="contact-form-input" placeholder="Enter Your Email" name="email"></input>
                            <input id="contact-bg-input" type="submit" value="Send" className="contact-button hover:drop-shadow-2xl " />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
