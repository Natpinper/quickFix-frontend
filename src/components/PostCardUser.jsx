import React from "react";
import { Link, useSearchParams } from "react-router-dom";
function PostCardUser({ title, description, _id, service, price }) {



  console.log("ïd of post ", _id);
  return (
    <div>
      <div className="PostCardUser">
        <Link to={`/user/post/${_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description} </p>
      </div>
    </div>
  );
}

export default PostCardUser;
