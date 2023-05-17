import React from 'react'
import { FirstCon } from './Home'

export const Tmessages = () => {
  return (
    <section id="grid--container">
        {/* First Container */}
        <FirstCon/>
        {/* <!-- second container --> */}
            <section id="messages-lists">
                <h3 style="margin: 1rem; ">Messages</h3>
                <form action="">
                    <input id="m-search" type="search" placeholder="Search..."/>
                </form>
                <div id="chatmates">
                    <div class="cmates">
                        <div class="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Christine Jade Avila </b><span id="username">@chjadeavila</span> </h1>
                        </div>
                        <h4 class="user--messages">
                            Hi po
                        </h4>
                    </div>
                    <div class="cmates">
                        <div class="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Mary Jane </b><span id="username">@mjparker</span> </h1>
                        </div>
                        <h4 class="user--messages">
                            Hi po
                        </h4>
                    </div>
                    <div class="cmates">
                        <div class="user--header">
                            <img src="/assets/default-user-profile.svg" alt=""/>
                            <h1 id="name"><b>Santana Lopez </b><span id="username">@santiLopes</span> </h1>
                        </div>
                        <h4 class="user--messages">
                            Hi po
                        </h4>
                    </div>
                </div>
            </section>

        {/* <!-- third container --> */}
            <section id="messages--section">
               <div class="m-user--header">
                    <div class="profile--photo"></div>
                    <h1 id="name"><b>Christine Jade Avila </b><br/><span id="username">@chjadeavila</span></h1>
               </div>

               <div class="messages--container">
                    <h4 class="from--messages">
                        from someone from someone from someone hi to you my friends hahahaha miss you
                    </h4>

                    <h4 class="to--messages">
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
