import React from 'react';
import Rectangle from '../assets/Rectangle.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CaseStudies = () => {
    // Data for case studies
    const casesInfo = [
        {
            backgroundImageUrl: 'https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg',
            title: 'The Olympian',
            description: 'The only athlete in the world to do her Olympic routine in 2020'
        },
        {
            backgroundImageUrl: 'https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg',
            title: 'The Savings Jar',
            description: 'Grow your savings treasure and grow your dragon.'
        },
        {
            backgroundImageUrl: 'https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg',
            title: 'Skhokho seMali',
            description: 'Helping South Africans become #CashCleva with Skhokho and TymeBank'
        },
    ];

    // Responsive settings for the slide
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1500, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='cases-body-section' id='cases'>
            {/* Header for the Case Studies section */}
            <div className='services-container-header'>
                <img src={Rectangle} alt='Rectangle' />
                <p>Case Studies</p>
            </div>

            {/* Case Studies slide */}
            <div className='case-studies'>
                <Carousel responsive={responsive} showDots autoPlay>
                    {
                        // Mapping through case studies data
                        casesInfo.map((data, index) => (
                            <div key={index} className='cases-info'>
                                {/* Background image */}
                                <div className='info-background-image'>
                                    <img src={data.backgroundImageUrl} alt={data.title} />
                                </div>

                                {/* Case study content */}
                                <div className='cases-info-content'>
                                    <img src={Rectangle} alt='Rectangle' />
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
