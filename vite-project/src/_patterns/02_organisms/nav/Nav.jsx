import React from 'react'
import { NavRight } from '../../01_molecules/NavRight/NavRight'
import data from '../../03_pages/00-homepage/00-homepage.json'
import "./Nav.css"
export const Nav = () => {
  return (
    <div className='nav'>
        <h1>{data.logo}</h1>
        <NavRight></NavRight>
    </div>
  )
}
