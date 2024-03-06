import React from 'react'
import data from '../../03_pages/00-homepage/00-homepage.json'
import "./NavMenu.css";
export const NavMenu = () => {
  return (
    <ul>
        {
            data.navUl.map((item,index) =>{
                return <li key={index}> {item.li} </li>
            })   
        }
    </ul>
  )
}
