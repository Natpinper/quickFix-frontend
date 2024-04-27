import React from "react";
import PostCard from "./PostCard";

function ProfileComponent({ name, email, password, location, posts=[] , _id }) {
  return (
   
    <div className="profile-layout">
      <h1 className="myName">Name: {name}</h1>
      <h3 className="myEmail">email: {email}</h3>
      <h3 className="myLocation">Location: {location}</h3>
      <div className="post-list-profile">
    {posts.map((post)=>(
      <PostCard key={post._id} {...post}/>
    ))}
    </div>
    </div>
  );
}

export default ProfileComponent;
