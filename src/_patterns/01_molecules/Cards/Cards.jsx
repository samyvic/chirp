import React from 'react'
import "./Cards.css"
import data from "../../03_pages/00-homepage/00-homepage.json"

import icon from "../../../../public/Chirp Starter Files/Assets/TwitterBlack.svg"

export const Cards = () => {
  return (
    <div className='cards'>
        
        {
            data.featuresCards.map( (item,index)=>{
                return( 
                    <div className='card' key={index}>
                        <img src={icon} alt="" />
                        <h2 >{item.feature.heading}</h2>
                        <p>{item.feature.paragraph}</p>
                    </div>
                )
            })
        }

    </div>
  )
}
