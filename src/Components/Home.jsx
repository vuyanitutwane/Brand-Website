import React from 'react'
import { Navbar } from './Navbar'
import HeroImage from '../assets/HeroImage.png'

export const Home = () => {
    return (
        <div className='home-container'>
            {/* Include the Navbar component */}
            <Navbar />

            {/* Home Container Section */}
            <div className='home-container-section'>
                {/* Background Image */}
                <div className='home-backgroundImage-container'>
                    <img src={HeroImage} alt='Hero' />
                </div>

                {/* Home Text Section */}
                <div className='home-text-section'>
                    {/* Main Heading */}
                    <h1 className='home-heading'>
                        Live with Confidence
                    </h1>

                    {/* Subheading */}
                    <p className='home-subheading'>
                        José Mourinho brings confidence to pan-African Sanlam campaign.
                    </p>

                    {/* CTA Button */}
                    <button className='secondary-button'>
                        View project
                    </button>
                </div>
            </div>
        </div>
    )
}
