import React, { useState } from 'react'
import './UserRegistration.css';
import axios from 'axios';

const UserRegistration = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('')

    async function addUser(e) {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/register/', {firstName, lastName, email, password})
        console.log('Response from post', response)
        setResponseMessage(response.data)
    }
  return (
    <>
      <div className='response-message'>
        <p>{responseMessage}</p>
      </div>
      <form onSubmit={addUser}>
          <input type="text" name="firstName" id="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required/>
          <input type="text" name="lastName" id="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required/>
          <input type="email" name="userEmail" id="userEmail" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" name="userPassword" id="userPassword" onChange={(e) => setPassword(e.target.value)} required/>
          <button>Register</button>
      </form>
    </>
  )
}

export default UserRegistration;