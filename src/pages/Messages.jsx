import React from 'react'
import { Navigation } from './Home'

//   NOTE! I am having trouble creating independent 
//   function of messages-lists and messages-section.
//   It won't render on the web page.

export const Messages = () => {
    return (
        <section id="grid--container">
            {/* First Container*/}
            <Navigation />
        
            {/* Second Container */}
            <section id="messages-lists">
                <h3 >Messages</h3>
                <form action="">
                    <input id="m-search" type="search" placeholder="Search..."/>
                </form>
                <div id="chatmates">
                    <div className="cmates">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                        </div>
                        <h4 className="user--messages">
                            Hi po
                        </h4>
                    </div>
                    <div className="cmates">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Mary Jane </b><span id="username">@mjparker</span> </h1>
                        </div>
                        <h4 className="user--messages">
                            Hi po
                        </h4>
                    </div>
                    <div className="cmates">
                        <div className="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Santana Lopez </b><span id="username">@santiLopes</span> </h1>
                        </div>
                        <h4 className="user--messages">
                            Hi po
                        </h4>
                    </div>
                </div>
            </section>

            {/* Third Container */}
            <section id="messages--section">
               <div className="m-user--header">
                    <div className="profile--photo"></div>
                    <h1 id="name"><b>Christine Jade Avila </b><br/><span id="username">@chjadeavila</span></h1>
               </div>

               <div className="messages--container">
                    <h4 className="from--messages">
                        from someone from someone from someone hi to you my friends hahahaha miss you
                    </h4>

                    <h4 className="to--messages">
                        to someone sdfsdf sdfs fdf sdd sd
                    </h4>
               </div>

               <form action="">
                    <input type="text" name="" id="text--messages" placeholder="Type message"/>
               </form>
            </section>
            
        </section>
    )
  }

