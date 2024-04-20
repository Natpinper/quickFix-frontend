import { useEffect, useState } from 'react'

import postService from '../services/Post.service'
import PostCard from "../components/PostCard"
import SearchBar from '../components/SearchBar'
import "../styles/HomePage.css"


const API_URL = "http://localhost:5005"
function HomePage() {

  const [post, setPost] = useState([])
  

  const getAllPosts= ()=>{
    postService.getAllPosts()
    .then((response)=>setPost(response.data))
    .catch((error)=>console.log(error))
  };

  useEffect(()=>{
    getAllPosts()
  },[]); 

  return (
    <div className='homepage-container'>
    <SearchBar/>
    <div className='PostList'>
    
      {post.map((post)=>(
      <PostCard key={post._id} {...post} />
      ))}
    </div>
    </div>
  )
}

export default HomePage
