import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/PostCard.css";
import { FaLocationArrow } from "react-icons/fa";


function PostCard({
  title, description, _id, price, user={}, service={}
})
{
  const { _id: userId, name, location } = user;
  const { category, subcategory } = service;

  return (
   
      <div className="Post-Card">
        
        <Link className="link" to={`/post/${_id}`}>
          <h1 className="title">{title}</h1>
        </Link>
        <Link className="link" to={`/user/${userId}`}>
          <h2 className="user-name">{name}</h2>
        </Link>
        <h2 className="category">{category}</h2>
        <h3 className="subcategory">{subcategory}</h3>
        <p className="description">{description}</p>
        <div className="location-container">
          <FaLocationArrow className="location-icon"></FaLocationArrow>
          <h3 className="location">{location}</h3>
        </div>
        <h3 className="price">{price} €/hour</h3>
      </div>
    );
 
}

export default PostCard;
