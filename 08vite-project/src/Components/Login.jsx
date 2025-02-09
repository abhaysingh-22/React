import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {User, setUser} = useContext(UserContext)
    console.log(User)

    const handSubmit = (e) => {
        e.preventDefault()
        const user = {username, password}
        setUser((prevUser) => [...prevUser, user])
        setUsername('')
        setPassword('')
    }
    return (
        <>
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' 
            />
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password' 
            />
            <button onClick={handSubmit}>Submit</button>
        </div>

        <div style={{marginBottom: "10px", marginTop: '10px', display: 'flex',  width: '50%'}} > {JSON.stringify(User)} </div>
        </>
    )
}

export default Login
