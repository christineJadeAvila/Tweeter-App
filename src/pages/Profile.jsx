import React from 'react'
import { FirstCon, ThirdCon } from './Home'

export const Profile = () => {
  return (
    <section id="grid--container">
        {/* first container */}
            <FirstCon/>
        {/* Second Container */}
         <section id="body-lists">
            <div id="profile--defaults">
                <div id="cover--photo"></div>
                <div id="profile--photo"></div>
            </div>

            <hr/>   
            {/* <!-- post lists start --> */}
            <section class="post--lists">
                <div id="post--properties">
                    <div class="user--header">
                        <img src="/assets/default-user-profile.svg" alt=""/>
                        <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                    </div>
                    <div class="user--post">
                        le sarefim
                    </div>
                    <form class="btn--nav" action="">
                        <ul id="nav--list">
                            <li><img src="assets/icons8-speech-bubble-96 1.png" alt=""/><span>30</span></li>
                            <li><img src="assets/icons8-retweet-96 1.png" alt=""/><span>30</span></li>
                            <li><img src="assets/icons8-heart-96 1.png" alt=""/><span>30</span></li>
                        </ul>
                    </form>
                </div>
            </section>
            <hr/>
            {/* <!-- post lists end --> */}
        </section>

        {/* Third Container */}
         <ThirdCon/>
    </section>
  )
}
