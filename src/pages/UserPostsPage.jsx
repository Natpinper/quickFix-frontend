import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../services/Post.service";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import "../styles/PostDetailPage.css";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "../services/Post.service";
import { confirmAlert } from "react-confirm-alert";

const API_URL = "http://localhost:5005";

function UserPostsPage(props) {
  const [post, setPost] = useState(null);

  const { postId, userId } = useParams();
  const { user, authenticateUser, storeToken } = useContext(AuthContext);

  const navigate = useNavigate()
  console.log(user, " THis is the USER ID");
  const getPost = () => {
    postService
      .getPostFromUser(postId)
      .then((response) => {
        const onePost = response.data;
        setPost(onePost);
        console.log(response.data);
        console.log(postId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId)=>{
    postService.deletePost(postId).then(()=>{
      navigate(`/${userId}/profile`)
      alert("The post has been deleted");
    })
  }

  const submitDelete = ()=>{
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick:()=> deletePost(postId)
        },
        {
          label: "No",
          onClick:()=>{}
        }
      ]
    })
  }
  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <div className="PostDetails">
      {post && (
        <>
          <h1 className="title">{post.title}</h1>
          <h2 className="category">{post.service.category}</h2>
          <h3 className="subcategory">{post.service.subcategory}</h3>
          <p className="description">{post.description}</p>
          <div className="location-container"></div>
          <h3 className="price">{post.price} €/hour</h3>
          {user._id === post.user._id && <button onClick={submitDelete}>Delete Post</button>}
          {user._id === post.user._id && 
            <Link to={`/user/post/${postId}/edit`}>
            <button>Edit Post</button>
            </Link>}
        </>
      )}
    </div>
  );
}

export default UserPostsPage;
