import React, { useEffect, useState } from 'react'
import "./home.css"
import Users from '../users/Users'
import EntreNavBar from '../entreNavbar/EntreNavBar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
const Home = () => {
    const [userData, setUserData] = useState([]);
    const usersRef = collection(db, 'users');
    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersData = await getDocs(usersRef);
                const userFilteredMap = usersData.docs.map((doc) => ({
                    ...doc.data(),
                    id:doc.id
                }));
                setUserData(userFilteredMap);
            } catch (error) {
                console.log(error)
            }
        }
        getUsers();
    }, [])
  return (
    <div className='main-homepage' >
        <EntreNavBar />
        <main className='users-conatiner-main' >
        {
            userData.map((user, index) => {
                return (
                    <Users key={index} username={user.name} jobTitle={user.phoneNo} about={`I am a ${user.role} and my name is ${user.name} you can contact me through mobile number.`} />
                )
            })
        }
        </main>
    </div>
  )
}

export default Home
