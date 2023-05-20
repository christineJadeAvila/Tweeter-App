import React from 'react'

export const Trends = () => {
    return (
        <section id="query--section">
        <div id="query--container">
            <form action="">
                <input id="search" type="search" placeholder="Search..."/>
            </form>
            <div id="trends">
                <span>What is Happening?</span>
                <div className="trends--lists">
                    {/* <!-- if trending's live --> */}
                    <h4 className="trending--condition">Trending <span id="live--status">LIVE!</span></h4>
                    {/* <!-- else --> */}
                    <h4 className="trending--content">DOTA 2 is BACK!</h4>
                </div>
                <div className="trends--lists">
                    {/* <!-- if trending's live --> */}
                    <h4 className="trending--condition">Trending <span id="live--status">LIVE!</span></h4>
                    {/* <!-- else --> */}
                    <h4 className="trending--content">KING CHARLES CORONATION DAY</h4>
                </div>
                <div className="trends--lists">
                    {/* <!-- if trending's live --> */}
                    <h4 className="trending--condition">Trending <span id="live--status">LIVE!</span></h4>
                    {/* <!-- else --> */}
                    <h4 className="trending--content">IMAGINE DRAGONS</h4>
                </div>
            </div>
            <div id="messages--">
                <span>messages -------</span>
                <span>view</span>
            </div>
        </div>
        </section> 
    )
}