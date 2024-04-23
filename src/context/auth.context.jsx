import React, { useState, useEffect } from "react";
import axios from "axios";
import { locals } from "../../../quickFix-backend/quickFix-server/app";
const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
const storeToken = (token)=>{
    localStorage.setItem('authToken', token)
}

const authenticateUser = ()=>{

    const storedToken = localStorage.getItem('authToken')

 const removeToken = ()=>{
    localStorage.removeItem("authToken")
 }

 const logOut = ()=>{
    removeToken()
    authenticateUser()
 }

    if(storedToken){
        axios.get( `${API_URL}/auth/verify`, {headers: {Authorization : `Beared ${storedToken}`}})
        .then((response)=>{
            const user = response.data
            setIsLoggedIn(true)
            setIsLoading(false)
            setUser(user)
        })
        .catch((error)={
            setIsLoggedIn(false)
            setIsLoading(false)
            setUser(null)
        })
    }   else{
        setIsLoggedIn(false)
        setIsLoading(false)
        setUser(null)
    }

useEffect(()=>{
    authenticateUser()
},[])


return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export { AuthProviderWrapper, AuthContext };
