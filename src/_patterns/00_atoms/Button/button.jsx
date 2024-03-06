import React from 'react'
import data from '../../03_pages/00-homepage/00-homepage.json'
import "./button.css";
export const Button = (props) => {
  return (
    <button className='button'>
      {props.children}
    </button>
  )
}



