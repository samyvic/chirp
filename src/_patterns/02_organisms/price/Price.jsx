import React from 'react'
import "./price.css"
import data from "../../03_pages/00-homepage/00-homepage.json"
import { PricePlan } from '../../01_molecules/PricePlan/PricePlan'
export const Price = () => {
  return (
    <div className='price'>
        <h1>{data.priceHeading}</h1>
        <p className='priceParagraph'>{data.priceParagraph}</p>
        <PricePlan></PricePlan>
    </div>
  )
}
