import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
//import postService from "../services/Post.service";

const API_URL = "http://localhost:5005";

function PostPage(props) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const getPost= ()=>{
    const token= localStorage.getItem('authToken')
    postService.getPost(postId)
    .then((response)=>{
        const onePost = response.data;
        setPost(onePost)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  useEffect(()=>{
    getPost()
  }, []);

  return (
    <div className="PostDetails">
    {post && (
        <>
        <h1>{post.title}</h1>
        <h2>{post.service}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <h3>{post.user.name}</h3>
        </>
    )}
    </div>
  )
}

export default PostPage;
