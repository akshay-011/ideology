import React from 'react'
import logo from "../../assets/logo-navbar.png"
import addLogo from "../../assets/notification-icon.png"
import logoutIcon from "../../assets/logout.svg"
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const NavbarBusi = () => {
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
    <div className='navbar' >
        <section className='navbar-logo-conatiner' >
            <img alt='logo' src={logo} width={60} />
        </section>
        <h2>Businessman</h2>
        <section style={{
          display:'flex',
        }} >
          <section className='options' >
              <button onClick={logout} ><img alt='logo' height={30} src={logoutIcon} /></button>
            </section>
        </section>
    </div>
  )
}

export default NavbarBusi
