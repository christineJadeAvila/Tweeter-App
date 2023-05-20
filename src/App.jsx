import { useState } from 'react'
import './scss/index.scss'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Messages } from './pages/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>
      <Profile/> */}
      <Messages/>
    </>
  )
}

export default App
