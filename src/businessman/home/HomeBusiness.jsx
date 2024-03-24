import React, { useEffect, useState } from 'react'
import NavbarBusi from '../navbar/NavbarBusi'
import Users from '../../entrepreneur/users/Users'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';



const HomeBusiness = () => {
    const [ideas, setIdeas] = useState([]);
    const ideaRef = collection(db, 'ideas');

    useEffect(() => {
        const getIdeas = async () => {
            try {
                const ideasDoc = await getDocs(ideaRef);
                const ideaFilteredData = ideasDoc.docs.map((idea) => ({
                    ...idea.data(),
                    id:idea.id
                }))
                console.log(ideaFilteredData)
            setIdeas(ideaFilteredData)
            } catch (error) {
                console.log(error)
            }
        }
        getIdeas()
    }, [])
  return (
    <div>
      <NavbarBusi />
      <section className='users-conatiner-main' >
        {
            ideas.map((idea, index) => {
                return(
                    <Users key={index} username={idea.title} jobTitle={idea.username} about={idea.description} />
                )
            })
        }
      </section>
    </div>
  )
}

export default HomeBusiness
