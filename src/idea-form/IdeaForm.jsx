import React, { useState } from 'react'
import './idea-form.css'
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo-auth.png"
const IdeaForm = () => {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const path = useNavigate()
    const submitIdea = async () => {
        try {
            const docRef =  doc(db, 'ideas', title);
            await setDoc(docRef, {
                id:auth.currentUser.uid,
                title:title,
                username:username,
                description:description 
            });
            
            path(-1);

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='login-container' >
        <section className='logo-container-login'>
            <img src={logo} width={400}/> 
        </section>
        <main className='auth-form' >
            <section className='inputs' >
                <input 
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Idea title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Idea Description' name='description' >

                </textarea>
                <button onClick={submitIdea} className='auth-button' id='odd-one' >SUBMIT</button>
            </section>
      </main>
    </div>
  )
}

export default IdeaForm
