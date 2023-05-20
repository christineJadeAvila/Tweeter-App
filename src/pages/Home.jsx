import React from 'react'
import { Navigation } from './components/Navigation'
import { Trends } from './components/Trends'

const Posts = () => {
    return (
        <section id="body-lists">

                <div id="upper--post-body">
                    <img src="assets/default-user-profile.svg" alt=""/>
                    <form id="post--form" action="">
                        <textarea id="post--area"name="textarea" rows="5" cols="30" placeholder="What is Happening?"></textarea>
                        <button id="post--button">post</button>
                    </form>
                </div>

               <hr/>
                {/* post lists start */}
                <section className="post--lists">
                    <div id="post--properties">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                        </div>
                        <div className="user--post">
                            le sarefim
                        </div>
                        <form className="btn--nav" action="">
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
                {/* <!-- post lists start --> */}
                <section className="post--lists">
                    <div id="post--properties">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                        </div>
                        <div className="user--post">
                            Words are flowing out like endless rain into a paper cup
                            They slither wildly as they slip away across the universe
                            Pools of sorrow, waves of joy are drifting through my opened mind
                            Possessing and caressing me
                        </div>
                        <form className="btn--nav" action="">
                            <ul id="nav--list">
                                <li><img src="assets/icons8-speech-bubble-96 1.png" alt=""/><span>30</span></li>
                                <li><img src="assets/icons8-retweet-96 1.png" alt=""/><span>30</span></li>
                                <li><img src="assets/icons8-heart-96 1.png" alt=""/><span>30</span></li>
                            </ul>
                        </form>
                    </div>
                </section>
                <hr/>
                {/* <!-- post lists end -->
                <!-- post lists start --> */}
                <section className="post--lists">
                    <div id="post--properties">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                        </div>
                        <div className="user--post">
                            Images of broken light which dance before me like a million eyes
                            They call me on and on across the universe
                            Thoughts meander like a restless wind inside a letterbox they
                            They tumble blindly as they make their way across the universe
                        </div>
                        <form className="btn--nav" action="">
                            <ul id="nav--list">
                                <li><img src="assets/icons8-speech-bubble-96 1.png" alt=""/><span>30</span></li>
                                <li><img src="assets/icons8-retweet-96 1.png" alt=""/><span>30</span></li>
                                <li><img src="assets/icons8-heart-96 1.png" alt=""/><span>30</span></li>
                            </ul>
                        </form>
                    </div>
                </section>
                <hr>
                {/* <!-- post lists end -->
                <!-- post lists start --> */}
                </hr>
                {/* post lists end */}

        </section>
    )
}

export const Home = () => {
  return (
    <section id="grid--container">
        {/* first container */} 
            <Navigation />

        {/* second container */}
            <Posts />

        {/* third container */}
            <Trends />
    </section>
  )
}
