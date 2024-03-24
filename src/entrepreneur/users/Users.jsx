import React from 'react'
import "./users.css"
const Users = ({
    username,
    jobTitle,
    about
}) => {
  return (
    <div className='users-container' >
      <section className='head'>
        <p>{username}</p>
        <span>{jobTitle}</span>
      </section>
      <main className='main-body' >
            <p>
                {about}
            </p>
      </main>
    </div>
  )
}

export default Users
