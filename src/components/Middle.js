import React from 'react';
import '../css/Middle.css'

const Middle = () => {
    return (
        <div className='middle-container'>
            <div className='middle-wrap'>
                <div className='middleText-container'>
                    <div className='middleBox'>
                        <h2 className='middleText-header'>Messing with the Light</h2>
                        <ul className='middleText-list'>
                            <li className="middleText-content">
                                Quantum mechanics is the physicist’s
                                most accurate model for describing the
                                world of the atom.
                            </li>
                            <li className="middleText-content">
                                But it also makes some of the most
                                persuasive arguments that conscious
                                perception is integral to the workings of
                                the universe.
                            </li>
                            <li className="middleText-content">
                                Quantum theory tells us that an
                                unobserved small object
                            </li>
                        </ul>
                    </div>
                    <div className='middleBox'>
                        <h3 className='middleText-header middleText-subHeader'>What accomplishes this collapse? </h3>
                        <p className="middleText-content">
                            What accomplishes this collapse? Messing
                            with it. Hitting it with a bit of light in order to
                            take its picture. Just looking at it does the job.
                        </p>
                        <p className="middleText-content"> 
                            Experiments suggest that mere knowledge
                            in the experimenter’s mind is sufficient to
                            collapse a wave function and convert
                            possibility to reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;