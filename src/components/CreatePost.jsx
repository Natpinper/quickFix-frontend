import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const API_URL = "https://quickfix-backend.adaptable.app"
function CreatePost() {
const [title, setTittle] = useState("")
const [user, setUser]= useState("")
const [service, setService] =useState ("")
const [description, setDescription]= useState("")
const [price, setPrice]= useState(0)


const handleSubmit = (e)=>{
    e.preventDefault()

    const requestBody = {title, user, service, description, price};

    axios
    .post(`${API_URL}/api/post`, requestBody)
    .then((response)=>{
        setTittle(""),
        setUser(""),
        setService(""),
        setDescription(""),
        setPrice(0)
    })
}
  return (
    <div>
      
    </div>
  )
}

export default CreatePost
