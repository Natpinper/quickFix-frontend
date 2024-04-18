import React from "react";
import { Link } from "react-router-dom";
function PostCard({title, description, _id, location, price, user, service}) {
  

  return (
    <div className="Post-Card">
       <Link className="link" to={`/post/${_id}`}>
       <h1>{title}</h1>
       </Link>
       <Link className="link" to={`/user/${_id}`}>
       <h2>{user.name}</h2>
       </Link>
       <h2>{service.category}</h2>
       <h3>{service.subcategory}</h3>
       <p>{description}</p>
       <h3>{location}</h3>
       <h3>{price} €/hour</h3>
    </div>
  );
}

export default PostCard;
