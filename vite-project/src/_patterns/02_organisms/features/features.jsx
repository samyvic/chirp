import React from 'react'
import "./features.css";
import { Cards } from '../../01_molecules/Cards/Cards';
import data from '../../03_pages/00-homepage/00-homepage.json'

export const Features = () => {
  return (
    <div className='features'>
        <h1 className='featuresHeading'>{data.featuresHeading}</h1>
        <Cards></Cards>
    </div>
  )
}
