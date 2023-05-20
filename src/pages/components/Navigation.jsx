import React from 'react'

export const Navigation = () => {
    return (
        <nav id="nav--container">
                <div id="f-user--header">
                    <img src="./assets/default-user-profile.svg" alt=""/>
                    <h1 id="name"><b>Christine Jade Avila </b><br/><span id="username">@chjadeavila</span> </h1>
                </div>
                <ul>
                    <li className="f-nav--list">Home</li>
                    <li className="f-nav--list">Profile</li>
                    <li className="f-nav--list">Messages</li>   
                    <li className="f-nav--list">Bookmarks</li>
                    <li className="f-nav--list">Notifications</li>
                    <section className="weather--api">
                        <h4>Weather Update</h4>     
                    </section>
                </ul>
        </nav>
    )
}
