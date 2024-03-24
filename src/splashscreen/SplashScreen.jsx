import React from 'react'
import "./splashscreen.css"
import logo from "../assets/logo-splash.png"
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
  const path = useNavigate()
  return (
    <div className='login-container' >
        <section  className='logo-container-login'>
            <img src={logo} width={300}/> 
        </section>
        <section className='button-group'>
            <button onClick={() => { path("/signup") }} >Register</button>
            <button onClick={() => { path("/login") }} id='odd-one' >Login</button>
        </section>
    </div>
  )
}

export default SplashScreen
