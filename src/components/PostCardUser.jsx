import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/PostCardUser.css"
function PostCardUser({ title, description, _id, service, price, userId }) {
  console.log( _id);
  return (
    <div>
      <div >
        <Link to={`/user/${userId}/post/${_id}`} className="link-to-posts">
          <h3>{title}</h3>
        </Link>
      
      </div>
    </div>
  );
}

export default PostCardUser;
