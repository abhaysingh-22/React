import React from 'react'
import { useContext } from 'react'

import UserContext from '../Context/UserContext'


function Profile() {
    const {user, setuser} = useContext(UserContext)
    console.log(user)

    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
    // <>
    // <h1>Hello</h1>
    // </>
}

export default Profile
