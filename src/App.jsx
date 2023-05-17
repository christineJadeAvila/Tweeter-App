import { useState } from 'react'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
