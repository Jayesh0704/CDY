import React from 'react'
import './DosAndDonts.scss'
import { Typewriter } from "react-simple-typewriter"
import Panelist from './Panelist'


const Panel = () => {
  return (
    
     <>
        <h1 className='Panel'>
         Our Speakers
        </h1>
      <div className='Panelist-container' id="dos-and-donts" >
        <Panelist
        title=" Anil Prakash Joshi"
        image="assets/Speaker1.jpg"
        description="founder of Himalayan Environmental Studies."
      />
      <Panelist
        title="Manasi Pradhan"
        image="assets/Speaker2.jpg"
        description="Women's rights activist."
      />
      <Panelist
        title="Medha Patkar"
        image="assets/Speaker3.jpg"
        description="Face of Narmada Bachao Andolan."
      />
      </div>
      </>
     
    
  )
}

export default Panel