import React from "react";
import PostCard from "./PostCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostCardUser from "./PostCardUser";
import "../styles/userProfile.css"
function ProfileComponent({ name, email, password, location, posts, _id, imageUrl }) {
  return (
    <div className="profile-layout">
    <div className="picture-and-details">
    <img src={imageUrl} className="profile-picture"/>
    <div className="user-details">
      <h1 className="myName">{name}</h1>
      <h3 className="myEmail">email: {email}</h3>
      <h3 className="myLocation">Location: {location}</h3>
      </div>
      </div>
      <div className="post-list-profile">
        {posts &&
          posts.map((post) => (
            <PostCardUser
              key={post._id}
              userId={post.user}
              _id={post._id}
              title={post.title}
              description={post.description}
              price={post.price}
              service={post.service}
             
            />
          ))}
      </div>
    </div>
  );
}

export default ProfileComponent;

