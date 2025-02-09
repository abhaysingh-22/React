import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [User, setUser] = React.useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : []
    })

    React.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(User))
    }, [User])
    return(
        <UserContext.Provider value = {{User, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;