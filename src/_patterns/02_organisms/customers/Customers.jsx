import React from 'react'
import "./customers.css"
import { Tweet } from '../../01_molecules/Tweet/Tweet'
import data from "../../03_pages/00-homepage/00-homepage.json"
export const Customers = () => {
  return (
    <div className='Customers'>
        <h1>{data.customersHeading}</h1>
        <Tweet></Tweet>
    </div>
  )
}
