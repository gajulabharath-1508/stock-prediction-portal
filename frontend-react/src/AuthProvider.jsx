import {useState,useContext, createContext} from 'react'

const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(
        !!localStorage.getItem('accessToken')
    )


  return (
    <div>
        <AuthContext value={{isLoggedIn,setIsLoggedIn}}>
            {children}

        </AuthContext>
      
    </div>
  )
}

export default AuthProvider
export {AuthContext};
