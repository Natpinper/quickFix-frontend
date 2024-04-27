import React, { useEffect, useState, useContext } from 'react'
import CreatePost from '../components/CreatePost'
import ProfileComponent from '../components/ProfileComponent'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import userService from '../services/User.service'
import { AuthContext } from '../context/auth.context'
import { useParams } from 'react-router-dom'
import {confirmAlert} from "react-confirm-alert"
function MyProfile() {

  
  const {user, setUser } = useContext(AuthContext)
 const navigate = useNavigate()

const getUser= ()=>{
  userService.getOneUser()
  .then((response)=>setUser(response.data))
  .catch((error)=>console.log(error))
}
const deleteUser=()=>{
  userService.deleteUser()
  .then(()=>{
    alert("The user has been deleted")
    navigate("/")
  })
}

const submitDelete=()=>{
  confirmAlert({
    title: 'Confirm to delete',
    message: 'Are you sure you want to delete this user?',
    buttons: [
      {
        label: 'Yes',
        onClick: deleteUser
      },
      {
        label: 'No',
        onClick: ()=>{}
        
      }
    ]
  });
}
useEffect(()=>{
  getUser()
},[setUser])

  return (
    <div className='My-Profile-container'>
    <div className='user-details'>
      <ProfileComponent 
      name={user.name}
      email={user.email}
      password={user.password}
      location={user.location}
      posts={user.posts} 
      />
    </div>

  <Link to="/post/create">
  <button>Create new post</button>
  </Link>
  <button onClick={submitDelete}>Delete User</button>
    </div>
  )
}

export default MyProfile
