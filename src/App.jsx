import { useState } from 'react'
import './scss/index.scss'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Messages } from './pages/Messages'
import { Auth } from './pages/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth />
      {/* <Profile/>
      <Messages/> */}
    </>
  )
}

export default App
