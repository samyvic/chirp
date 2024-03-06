import React from 'react'
import "./Footer.css"
import { FooterRight } from '../../01_molecules/FooterRight/FooterRight'
import data from "../../03_pages/00-homepage/00-homepage.json"
export const Footer = () => {
  return (
    <div className='Footer'>
        <h1>{data.logo}</h1>
        <FooterRight></FooterRight>
    </div>
  )
}
