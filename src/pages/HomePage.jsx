import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import postService from '../services/Post.service'

function HomePage() {
  
  const [post, setPost] = useState(null)
  const {postId} = useParams();

  const getAllPosts= ()=>{
    postService.getAllPosts()
    .then((response)=>setPost(response.data))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <div className='search-bar'>
      <input type='text' placeholder='What are you looking for?'  />
      <div className='Filters'>
      </div>
      <div className='Featured-categories'></div>
      </div>
    </div>
  )
}

export default HomePage
