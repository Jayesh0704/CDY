import React from 'react'
import './Home.scss'
import Events from "../Timeline/Events";
import SlideShow from '../SlideShow/SlideShow';
import Contacts from '../Contacts/Contacts';
import Panel from '../Panelists/Panel';
import HeroSec from './HeroSec/HeroSec';

const Home = () => (
  <div>

    <HeroSec />
    <Events />
    <Panel />
    <SlideShow />
    <Contacts />
  </div>
)

export default Home