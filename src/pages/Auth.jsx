import React from 'react'
import '../scss/auth.scss'



const signIn = () => {
  
}

export const Auth = () => {
  return (
    <div className='flex--container'> 

      <h1>Welcome to tweeter</h1>

      <nav className="navigation--bar">
        <h2>Sign In</h2>
        <h2>| Sign Up</h2>
        <img src="" alt="" />
      </nav>

      <form action="" className="inputs">
          <input type="email" name="email" id="" placeholder="email"/>
          <input type="text" name="username" id="" placeholder="username"/>
          <input type="password" name="password" id="" placeholder="password"/>
      </form>

      <footer className='footer'>
          <a href="">already have an account?</a>
          <a href=""><button>sign up</button></a>
      </footer>

    </div>
  )
}
