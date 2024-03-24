import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo-navbar.png"
import addLogo from "../../assets/add-logo.png"
import logoutIcon from "../../assets/logout.svg"
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const EntreNavBar = () => {
  const path = useNavigate()
  const logout = async () => {
    try{
      await signOut(auth);
      path("/login");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <nav className='navbar' >
      <section className='navbar-logo-conatiner' >
            <img alt='logo' src={logo} width={60} />
      </section>
      <h2>Entrepreneur</h2>
      <section style={{
        display:'flex',
      }} >
        <main className='options' >
        <button onClick={() => {
          path("/ideas/add");
        }} ><img alt='logo' src={addLogo} height={30} /></button>
        </main>
        
        <section className='options' >
            <button onClick={logout} ><img alt='logo' height={30} src={logoutIcon} /></button>
          </section>
      </section>
      </nav>
      
  )
}

export default EntreNavBar
