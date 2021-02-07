import React from 'react';

import { useSelector } from 'react-redux';

const Contact = () => {

    let data = useSelector(state => state.myData);

    return (
                    <div className="section-vcardbody section-page" id="page-contact">
                        <div className="section-contact">
        
                            {/* Section title */}
                            <h2 className="section-title">Contact</h2>
                            {/* /Section title */}
        
                            <div className="map">
                                <div className="map-overlay" />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.675860780842!2d106.67346581775915!3d-6.307149699043249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e52b89f40fad%3A0x11418975f908355a!2sJl.%20Pinus%20II%2C%20Rw.%20Buntu%2C%20Kec.%20Serpong%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015318!5e0!3m2!1sid!2sid!4v1612641076206!5m2!1sid!2sid" height={250} style={{border: 0}} allowFullScreen />
                            </div>
        
                            {/* Contact infos */}                 
                            <div className="contact-infos">
                                <h4 className="contact-subtitle-1"><i className="fa fa-map" />&nbsp;   Address</h4>
                                <p>{data.address}</p>
                                <h4 className="contact-subtitle-1"><i className="fa fa-phone-square" />&nbsp; Phone</h4>
                                <p>{data.phone}</p>
                                <h4 className="contact-subtitle-1"><i className="fa fa-envelope" />&nbsp; Mail</h4>
                                <p>{data.email}</p>
                            </div>
                            {/* /Contact infos */}
        
                            {/* Contact form */}
                            <h4 className="contact-subtitle-1"><i className="fa fa-paper-plane-o" />&nbsp; Send Me a Message</h4>
                            <form id="contactForm" method="post" className="form">
                        
                                {/* Form Field */}
                                <div className="form-group">
                                    <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
                                </div>
                                {/* /Form Field */}
                            
                                {/* Form Field */}
                                <div className="form-group">
                                    <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
                                </div>
                                {/* /Form Field */}
                            
                                {/* Form Field */}
                                <div className="form-group">
                                    <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
                                </div>
                                {/* /Form Field */}
                            
                                {/* Form Field */}
                                <div className="form-group">
                                    <textarea className="form-control required" id="message" name="message" placeholder="Message" rows={5} required defaultValue={""} />
                                </div>
                                {/* /Form Field */}
                            
                                {/* Form Field */}
                                <div className="form-group">
                                    <input type="submit" className="btn btn-default form-send" defaultValue="Send!" />
                                </div>  
                                {/* /Form Field */}
        
                            </form>
                            {/* /Contact Form */}
        
                        </div>			
                    </div>
    )
}

export default Contact