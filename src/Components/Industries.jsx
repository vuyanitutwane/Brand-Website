import React from 'react';
import Rectangle from '../assets/Rectangle.png';
import { Grid, Image } from 'semantic-ui-react';
import Visa from '../assets/Visa.png';
import Spotify from '../assets/Spotify.png';
import BBC from '../assets/BBC.png';
import Distel from '../assets/Distel.png';
import Engen from '../assets/Engen.png';
import Liquid from '../assets/Liquid.png';
import microsoft from '../assets/microsoft.png';
import Multichoice from '../assets/Multichoice.png';
import Nike from '../assets/Nike.png';
import PnP from '../assets/PnP.png';
import Sanlam from '../assets/Sanlam.png';
import Santam from '../assets/Santam.png';
import TFG from '../assets/TFG.png';
import TymeBank from '../assets/TymeBank.png';
import wesgrow from '../assets/wesgrow.png';

export const Industries = () => {
    // Array of images
    const images = [
        Visa,
        TymeBank,
        Distel,
        Spotify,
        microsoft,
        Engen,
        Nike,
        wesgrow,
        Multichoice,
        PnP,
        Liquid,
        TFG,
        Sanlam,
        Santam,
        BBC
    ]

    return (
        <div className='industries-container' id='industries'>
            {/* Services Container Header */}
            <div className='services-container-header'>
                <img src={Rectangle} alt='Rectangle' />
                <p>You'll be in good company</p>
            </div>

            {/* Industries Heading */}
            <div className='industries-heading'>
                <h1>Trusted by leading brands</h1>
            </div>

            {/* Industries Body Section */}
            <div className='industries-body-section'>
                <Grid columns={5}>
                    {
                        // Mapping through images
                        images.map((imageUrl, index) => (
                            <Grid.Column key={index}>
                                {/* Displaying an image */}
                                <Image src={imageUrl} alt={`Image ${index}`} centered />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
};
