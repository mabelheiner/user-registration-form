import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import UserRegistration from './components/UserRegistration';

function App() {
  const [count, setCount] = useState(0)
  const [emails, setEmails] = useState([])

  const getEmails = async () => {
    const response = await axios.get('http://localhost:5000/register')
    setEmails(response.data)
    console.log('Data from api', response.data)
  }

  useEffect(() => {
    getEmails();
  }, [])

  return (
    <>
      <h1>Register</h1>{/* 
      <h2>Current app users:</h2>
      <ul>
        {emails.map((email) => (
          <li key={email}>{email}</li>
        ))}
      </ul> */}      
      <UserRegistration getEmails={getEmails}/>
    </>
  )
}

export default App
