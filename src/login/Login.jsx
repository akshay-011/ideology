import React, { useState } from 'react';
import "./login.css";
import logo from "../assets/logo-auth.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();

               
                if (userData.role === 'Developer') {
                    navigate('/developer/home'); 
                } else if (userData.role === 'Entreprenuer') {
                    navigate('/entrepreneur/home'); 
                } else if (userData.role === 'Businessman') {
                    navigate('/businessman/home'); 
                }
            }
        } catch (err) {
            console.log("Login failed:", err);
        }
    };

    return (
        <div className='login-container'>
            <section className='logo-container-login'>
                <img src={logo} width={400}/> 
            </section>
            <main className='auth-form'>
                <section className='inputs'>
                    <input 
                        type='text'
                        placeholder='Email'
                        name='email'
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}                                 
                    />

                    <input 
                        type='password'
                        placeholder='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>
                <section className='form-things'>
                    <button onClick={signIn} className='auth-button'>Login</button>
                    <p className='no-account'> Don't have an account ? <a href='/signup'>Create new account</a> </p>
                </section>
            </main>
        </div>
    );
}

export default Login;
