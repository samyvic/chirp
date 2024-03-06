import React from 'react'
import { NavMenu } from '../../00_atoms/NavMenue/NavMenu'
import { Button } from '../../00_atoms/Button/button'
import "./NavRight.css"
import data from "../../03_pages/00-homepage/00-homepage.json"
import twitterLogo from "../../../../public/Chirp Starter Files/Assets/Twitter.svg"


export const NavRight = () => {
  return (
    <div className='NavRight'>
        <NavMenu></NavMenu>
        <Button children={<div className='navButton'><img src={twitterLogo} alt="" />{data.buttons[0].signIn}</div>}></Button>
    </div>
  )
}
