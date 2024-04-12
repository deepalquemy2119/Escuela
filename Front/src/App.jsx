import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import { login } from './components/login.component'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h2 className='title'>Smart School</h2>
      <div className="card">
        
      <a href="components/login.component.jsx" className='login' target="_blank">
          Login
        </a><br/><br/><br/><br/>
      
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p className='text-pe'>Account?  Sign up</p><a href='#' className='account'> here..!!</a>
      </div>
      
    </>
  )
}

export default App
