import React from 'react';
import WebDevIcon from '../assets/WebDevIcon.png'
import AppDevIcon from '../assets/AppDevIcon.png'
import BlockchainIcon from '../assets/BlockchainIcon.png'
import UXIcon from '../assets/UXIcon.png'
import Rectangle from '../assets/Rectangle.png'

export const Services = () => {
    // Array of service information objects
    const servicesInfo = [
        {
            icon: WebDevIcon,
            title: 'Web development',
            text: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
        },
        {
            icon: AppDevIcon,
            title: 'User experience & design',
            text: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
        },
        {
            icon: UXIcon,
            title: 'Mobile app development',
            text: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
        },
        {
            icon: BlockchainIcon,
            title: 'Blockchain solutions',
            text: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
        },
    ];

    return (
        <div className='services-container' id='services'>
            {/* Services Container Header */}
            <div className='services-container-header'>
                <img src={Rectangle} alt='Rectangle' />
                <p>What we do</p>
            </div>

            {/* Services Heading */}
            <div className='services-heading'>
                <h1>
                    We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
                </h1>
            </div>

            {/* Kinds of Services */}
            <div className='kinds-of-services'>
                {
                    // Mapping through service information
                    servicesInfo.map((data) => (
                        <div key={data.title} className='kinds-of-services-info'>
                            {/* Service Icon */}
                            <div key={data.title} className='info-box-image'>
                                <img src={data.icon} alt={data.title} />
                            </div>

                            {/* Service Title */}
                            <h2>{data.title}</h2>

                            {/* Service Description */}
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
