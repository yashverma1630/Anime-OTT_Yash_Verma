import { useState } from 'react'
import './App.css'
import LoginRegister from './LoginRegister'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <LoginRegister/>
      <Register />
    </div>
    </>
  )
}

export default App
