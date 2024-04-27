import React from 'react'
import PostCard from './PostCard'

function ProfileComponent({ name, email, password, location, posts={}}) {
  return (
    <div "profile-layout">
      <h1 className='myName'>{name}</h1>
      <h3 className='myEmail'>{email}</h3>
<h3 className='myPassword'>{password}</h3>
<h3 className='myLocation'>{location}</h3>
    </div>
  )
}

export default ProfileComponent
