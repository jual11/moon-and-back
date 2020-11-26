import React from 'react';
import Auction from './Auction';
import arrow from '../pictures/arrow.png';
import '../css/Header.css'

const Header = () => {

    const scroll = () => {
        const element = document.getElementById("scrollTo");
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className='headerImage-container'>
                <div className='headerImage'></div>
                <div className='arrow-container'>
                    <div className='arrow-wrap' onClick={() => scroll()}>
                        <img id='arrow' src={arrow} alt='arrow' />
                        <img id='arrow-hover' src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
            <div className='headerText-container' id="scrollTo">
                <div className='headerText-wrap'>
                    <div className='headerBox'>
                        <h2 className='headerText-header'>Is the web possiblewithout the spider?</h2>
                        <p>
                            Are space and time physical objects that
                            would continue to exist even if living
                            creatures were removed from the scene?
                        </p>
                        <p>
                            Figuring out the nature of the real world has
                            obsessed scientists and philosophers for
                            millennia. Three hundred years ago, the Irish
                            empiricist George Berkeley contributed a
                            particularly prescient observation: The only
                            thing we can perceive are our perceptions.
                        </p>
                    </div>
                    <div className='headerBox'>
                        <h3 className='headerText-header headerText-subHeader'>Color, sound</h3>
                        <p>
                            Color, sound, temperature, and the like exist
                            only as perceptions in our head, not as
                            absolute essences. In the broadest sense,
                            we cannot be sure of an outside universe at
                            all.
                        </p>
                        <h3 className='headerText-header headerText-subHeader'>Temperature</h3>
                        <p>
                            For centuries, scientists regarded Berkeley’s
                            argument as a philosophical sideshow and
                            continued to build physical models based on
                            the assumption of a separate universe “out
                            there” into which we have each individually
                            arrived.
                        </p>
                    </div>
                </div>
            </div>
            <Auction/>
        </div>
    );
}

export default Header;