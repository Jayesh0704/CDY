import React, { useState, useEffect } from 'react'
import './HeroSec.scss'
import background from './bg-droplets-blue.png'
import { useSpring, animated, config } from 'react-spring'
import sanityClient from '../../../client'


const HeroSec = () => {
    const [donateCount, setDonateCount] = useState(0);
    const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: donateCount,
    delay: 200,
    config: config.molasses,
  })

  return (
    <div className='hero'>
        <div className='main-hero p-5'>
            <h1 className='col-12 col-md-10 '>
               Conferencia de Youth (CdY) is a special conference organized by NSS annually that provides various social organizations across the country a platform to discuss, ideate and innovate to bring positive impact in the society.
            </h1>
           
              
            
        </div>
     
    </div>
  )
}

export default HeroSec