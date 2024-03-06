import React from 'react'
import "./Tweet.css"
import data from "../../03_pages/00-homepage/00-homepage.json"

import twitterLogo from "../../../../public/Chirp Starter Files/Assets/TwitterBlue.svg"
import like from "../../../../public/Chirp Starter Files/Assets/Like.svg"


export const Tweet = () => {
  return (
        <div className="tweetsContainer">
            {
                data.tweets.map((item, index) =>{
                    return (
                        <div className='Tweet' key={index}>
                        <div className='tweetHeader'>
                            <img src={"../../../../public/Chirp Starter Files/Assets/" + item.userImage + ".svg"} alt="User Avatar" />
                            <div className='tweetUserName'>
                                <h3>{item.customerName}</h3>
                                <p>{item.username}</p>
                            </div>
                            <img src={twitterLogo} alt="Twitter logo" className='twitterLogo'/>
                        </div>
                        <p>{item.tweet}</p>
                        <div className='tweetFooter'>
                            <img src={like} alt="Like image" />
                            <p className='likesNumber'>{item.likes}</p>
                            <p className='tweetDate'>{item.date}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>



  )
}
