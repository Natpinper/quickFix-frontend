import React, { useEffect, useState } from 'react'
import userService from '../services/User.service';
import { Link, useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';



const API_URL = "http://localhost:5005";

function UserDetailsPage(props) {
    const [user, setUser]= useState(null)
    const { userId } = useParams();

    const getOneUser = (id) =>{
        userService
        .getOneUser(userId)
        .then((response)=>{
            const oneUser = response.data;
            setUser(oneUser)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getOneUser()
    },[])

  return (
    <div className='UserDetails'>
    {user && (
        <>
        <h1 className='name'>{user.name}</h1>
        <h2 className='location'>{user.location}</h2>
        <h3 className='rating'>{user.rating}</h3>
        <div>{user.posts && user.posts.map((post)=>(
            <PostCard key={post._id} {...post}/>

    ))}
        </div> 
        </>
    )}
      
    </div>
  )
}

export default UserDetailsPage
