import React from 'react'
import data from '../../03_pages/00-homepage/00-homepage.json'
import {Button} from "../../00_atoms/Button/button";
import { LearnMore } from '../../00_atoms/LearnMore/LearnMore';
import "./HeroContent.css"


import twitterLogo from "../../../../public/Chirp Starter Files/Assets/Twitter.svg"


export const HeroContent = () => {
  return (
    <div className='HeroContent'>
        <h1>{data.heroTitle}</h1>
        <p>{data.heroParagraph}</p>
        <Button children={<div className='heroButton'><img src={twitterLogo} alt="" />{data.buttons[0].signIn}</div>}></Button>
        <LearnMore></LearnMore>
        <div className='usersImg'>
            {
                data.users.map((user, index)=>{
                    return <img key={index} src={'../../../../public/Chirp Starter Files/Assets/' + user.path + '.svg'}></img> 
                })
            }
        </div>
        <p dangerouslySetInnerHTML={{__html: data.heroContentFooterParagraph}}></p>
    </div>
  )
}

