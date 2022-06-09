import React from 'react';
import '../../components/HeroSection/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/video/industry.mp4" autoPlay loop muted />
            <h1>Konstruktion och tillverkning av formverktyg </h1>
            <p>av plast, gummi,
                 silikon och aluminium, 
                 blister och vakuumformningsverktyg </p>
    </div>
  )
}

export default HeroSection