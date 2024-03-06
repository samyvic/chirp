
import React from 'react';
import "./Hero.css"
import heroImage from "../../../../public/Chirp Starter Files/Assets/HeroImageDesktop.png"
import { HeroContent } from "../../01_molecules/HeroContent/HeroContent"
export const Hero = () => {
  return (
    <div className="Hero">
        <HeroContent></HeroContent>
        <div className='contentImage'>
                <img src={heroImage}></img>
        </div>
    </div>
  )
}
