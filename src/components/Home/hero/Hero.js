import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../../images/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1 className='text-6xl font-medium'>First Class Travel</h1>
                <h2 className='my-2 text-xl'>Top 1% Locations Worldwide</h2>
                <form className="hero-form">
                    <div>
                        <input className='outline-0 focus:ring-0' type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button className="bg-teal-400 p-3 rounded">
                            <AiOutlineSearch className='text-white text-2xl font-bold'/>
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
