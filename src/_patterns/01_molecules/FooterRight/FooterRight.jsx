import React from 'react'
import "./FooterRight.css"
import data from "../../03_pages/00-homepage/00-homepage.json"
import TwitterBlack from "../../../../public/Chirp Starter Files/Assets/TwitterBlack.svg"
export const FooterRight = () => {
  return (
    <div className='FooterRight'>
        <img src={TwitterBlack} alt="" />
        <ul>
            {
                data.footerUl.map((item, index)=>{
                    return <li key={index}>{item.li}</li>
                })
            }
        </ul>
    </div>
  )
}
