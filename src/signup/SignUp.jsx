import React, { useState } from 'react'
import "./signup.css"
import logo from "../assets/logo-auth.png"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../config/firebase";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const path = useNavigate();

    const signUp = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, email, password);
          const userData = {
            name:name,
            phoneNo:phoneNo,
            role:role
          };
    
          const docRef = doc(db, 'users', user.user.uid);
          await setDoc(docRef, userData)
          path('/login'); 
          
        } catch (error) {
          console.error('Error signing up:', error);
        }
      };
  return (
    <div className='login-container' >
        <section className='logo-container-login'>
            <img src={logo} width={400}/> 
        </section>
        <main className='auth-form'>
            <section className='inputs' >
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}                                  
                />
                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    id='email'  
                    value={email}    
                    onChange={(e) => setEmail(e.target.value)}                                  
                />

                <input 
                    type='number'
                    placeholder='Phone Number'
                    name='phoneNo'
                    id='phoneNo'  
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}                                  

                />

                <input 
                    type='password'
                    placeholder='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}                                  
                />

                <section className='choose'>
                    <p>What best describes you</p>
                    <div className='users-choose'>
                        <div className='round-user'>
                            <input  
                                type='radio' 
                                name='role' 
                                value={'Developer'} 
                                onChange={(e) => setRole(e.target.value)}                                  
                            />
                            <p>Developer</p>
                        </div>
                        <div className='round-user'>
                            <input 
                                type='radio' 
                                name='role' 
                                value={'Entreprenuer'} 
                                onChange={(e) => setRole(e.target.value)}
                                />
                            <p>Entreprenuer</p>
                        </div>
                        <div className='round-user'>
                            <input 
                                type='radio' 
                                name='role' 
                                value={'Businessman'} 
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <p>Businessman</p>
                        </div>
                    </div>
                </section>
        
            </section>
            <section className='form-things' >
                <button onClick={signUp} className='auth-button' >Sign Up</button>
                <p className='no-account'> Already have an account ? <a href='/login' >Login</a> </p>
            </section>
        </main>
    </div>
  )
}

export default SignUp
