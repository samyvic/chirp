import React from 'react'
import "./PricePlan.css"
import data from "../../03_pages/00-homepage/00-homepage.json"
import { Button } from "../../00_atoms/Button/button"
import checkMark from "../../../../public/Chirp Starter Files/Assets/Checkmark.svg"
import twitterLogo from "../../../../public/Chirp Starter Files/Assets/Twitter.svg"
export const PricePlan = () => {
  return (
    <div className='PricePlan'>
        <p>{data.pricePlan}</p>
        
        <p><span>{data.pricePerMonth}</span>{data.perMonth}</p>
        <hr />
        {data.priceFeatures.map((item,index)=>{
            return(
            <div className='paragaphCheckMark' key={index}>
                <img src={checkMark} alt="" />
                <p>{item.feature}</p>
            </div>) 
        })}
        <hr />
        
        <Button children={<div className='priceButton'><img src={twitterLogo} alt="" />{data.PriceButton}</div>}></Button>
    </div>
  )
}
