import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-700 text-3xl p-4 text-white justify-center align-middle flex'>User: {userid}</div>
    )
}

export default User



//loader kya hota h ? kuch nhi iss se api call hoti h jaise useeffect se krte h uss se fast hoti h that jaise hi hum componenet pr mouse hover kr rhe honge tb hi se data fetching suru ho jata h and click krte hi bina load kiye data aa jata h
