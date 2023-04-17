import React from 'react';

import yshumnyi from './images/yshumnyi.jpeg'
import rnosach from './images/rnosach.jpeg'

const HomeBottom = () => {
    return ( 
        <div className='homebottom' id='homebottom'>
            <div className='abouthead'>
                <h1>About Us</h1>
            </div>

            <div className='about-content'>
                <div className='about-description'>
                    <p>We are a group of computer science students studying at the innovative campus of NTU KhPI. This site is a uevent project we created for the "FullStack" course.
                    </p>
                </div>

                <div className='profiles'>
                    <div className='yshumnyi'>
                        <img src = {yshumnyi} alt='img1'></img>
                        <h2>yshumniy</h2>
                        <h3>Student of the Innovation Campus</h3>
                    </div>
                    <div className='rnosach'>
                        <img src = {rnosach} alt='img3'></img>
                        <h2>rnosach</h2>
                        <h3>Student of the Innovation Campus</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeBottom;