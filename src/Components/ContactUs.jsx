import React from 'react'
import Rectangle from '../assets/Rectangle.png'

export const ContactUs = () => {
    return (
        <div className='footer-section' id='contactus'>
            {/* Contact Us Container */}
            <div className='contact-us-container'>
                {/* Contact Us Header */}
                <div className='contact-us-container-header'>
                    <img src={Rectangle} alt='Rectangle' />
                    <p>Contact us</p>
                </div>

                {/* Contact Information */}
                <div className='contact-us-header'>
                    <div className='heading'>
                        <span> Have a project in mind?</span>
                        <span> Let's make it happen</span>
                    </div>

                    <div className='contact-us-address'>
                        <span>22 Street Name, Suburb, 8000,</span>
                        <span>Cape Town, South Africa</span>
                        <span>+27 21 431 0001</span>
                        <span>enquiries@website.co.za</span>
                    </div>
                </div>

                {/* Footer Links */}
                <div className='contact-us-footer'>
                    <div className='footer-section-column'>
                        <span>Terms of services</span>
                        <span>Privacy policy</span>
                        <span>Impressum</span>
                    </div>
                    <div className='footer-section-column'>
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>Twitter</span>
                    </div>
                    <div className='footer-section-column'>
                        <span>Github</span>
                        <span>LinkedIn</span>
                        <span>Teams</span>
                    </div>
                    <div className='footer-section-column'>
                        <span>YouTube</span>
                        <span>Behance</span>
                        <span>Dribbble</span>
                    </div>
                    <div className='footer-section-column'>
                        <span>Explore open jobs</span>
                        <span></span>
                        <span>©2000—2023 Company Name</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
