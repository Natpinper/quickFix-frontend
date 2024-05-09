import React from "react";
import { Link, useSearchParams } from "react-router-dom";
function PostCardUser({ title, description, _id, service, price, userId }) {
  console.log( _id);
  return (
    <div>
      <div className="PostCardUser">
        <Link to={`/user/${userId}/post/${_id}`}>
          <h3>{title}</h3>
        </Link>
      
      </div>
    </div>
  );
}

export default PostCardUser;
