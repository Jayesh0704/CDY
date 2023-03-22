
import React from 'react'
import Card from "./Card"
const Events = () => (
   <>
        <h1 className="kernel">Our Kernel Events 
           
        </h1>
        <div className="timeline_container" id="steps-to-donate">
        <Card
    title="Volunesia"
    pdf="assets/Volunesia Details.pdf"
    image="/assets/Volunesiaeventpic.jpeg"
    link=" https://unstop.com/conferences/conferencia-de-youth-2023-volunesia-apogee-bits-pilani-a-hivemind-genesis-bits-pilani-631868"    
    description="Volunesia is a platform for college social chapters to showcase their hard work and achievements
    over the year, connecting with other student-led initiatives to share their stories of impact and
    innovation. This event offers a chance to learn about the efforts made to address various
    community challenges and to demonstrate the positive impact of student-led initiatives. It provides
    a platform to connect with like-minded students and to be a part of an inspiring and transformative
    experience."
  />
  <Card
    title="Samadhaan"
    pdf="assets/Samadhaan Details.pdf"
    image="assets/Samadhaaneventpic.jpeg"
    link="https://unstop.com/competitions/samadhaan-apogee-bits-pilani-a-hivemind-genesis-bits-pilani-632478"
    description="Samadhaan, a Social Entrepreneurship and Innovation Competition, organized by NSS BITS Pilani in
    collaboration with PIEDS, ENACTUS, and NIRMAAN, is an opportunity for entrepreneurs to
    showcase their ideas and receive mentorship from experienced panelists and innovators. The
    participants will present their ideas to a panel of judges, who will select the winners based on the
    impact of their ideas and their potential to create sustainable social enterprises. The winners will
    receive funding and support to help them bring their ideas to life. We believe that this competition
    can inspire the next generation of social entrepreneurs and create a positive impact on society.
    "
  />
  <Card
    title="Yuva Samvad"
    pdf="assets/Yuva Samvad.pdf"
    image="assets/YuvaSamvadeventpic.jpeg"
    link="https://unstop.com/competitions/yuva-samvad-apogee-bits-pilani-a-hivemind-genesis-bits-pilani-633649"
    description="Yuva Samvad is a dynamic event that fosters discussion and debate between the judges and
    participants on pressing social issues. It combines elements of a trial court and town hall style
    discussion, encouraging critical thinking and innovative solutions.
    Participants will have the opportunity to showcase their research and advocacy skills in a simulated
    trial setting, while engaging in meaningful discussions with peers and expert judges. It's an exciting
    opportunity to challenge your peers, showcase your skills, and be a part of the solution.
    Winners will be decided on the basis of the level of discussions, the way in which ideas are
    presented and on many more factors. Every winner will be receiving exciting gifts and prizes."
  />
      </div>
      </>
);

export default Events;


