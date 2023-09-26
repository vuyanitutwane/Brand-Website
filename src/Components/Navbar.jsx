import React from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo.png'

export const Navbar = () => {
    return (
        <nav>
            {/* Navbar Menu Container */}
            <div className='navbar-menu-container'>
                {/* Navbar Logo */}
                <div className='navbar-logo-container'>
                    <img src={logo} alt='Logo'/>
                </div>

                {/* Navbar Links */}
                <div className='navbar-links-container'>
                    {/* HashLinks to different sections */}
                    <HashLink to='#services'>Services</HashLink>
                    <HashLink to='#industries'>Industries</HashLink>
                    <HashLink to='#cases'>Cases</HashLink>
                    <HashLink to='#contactus'>ContactUs</HashLink>
                </div>

                {/* Chat Button */}
                <div className='navbar-chat-button-container'>
                    <button className='primary-button'>Let's Talk</button>
                </div>
            </div>
        </nav>
    )
}
