import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
  e.preventDefault()

  fetch('https://taskmanager-rest-api-nodejs.onrender.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.error(err)
    })
}
  return (
    <>
<form onSubmit={handleSubmit}>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
  <button type="submit">Login</button>
</form>
      
    </>
  )
}
export default App
