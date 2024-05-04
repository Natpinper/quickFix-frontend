import React, { useEffect, useState, useContext } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import userService from "../services/User.service";
import { AuthContext } from "../context/auth.context";
import { confirmAlert } from "react-confirm-alert";

function MyProfile() {
  const { user, setUser, isLoggedIn, removeToken, logOut } = useContext(AuthContext);
  const { userId, postId } = useParams();

  const navigate = useNavigate();

  const getUser = (userId) => {
    userService
      .getOneUser(userId)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };
  const deleteUser = (userId) => {
    userService.deleteUser(userId).then(() => {
      logOut()
      navigate("/");
      alert("The user has been deleted");
      
    });
  };

  const submitDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick:()=> deleteUser(userId),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  return (
    <div className="My-Profile-container">
      <div className="user-details">
        <ProfileComponent
          id={user._id}
          name={user.name}
          email={user.email}
          password={user.password}
          location={user.location}
          posts={user.posts}
        />
        
      </div>
     

      <Link to={`/user/${userId}/post/create`}>
        <button>Create new post</button>
      </Link>
      <button onClick={submitDelete}>Delete User</button>
      <Link to={`/user/${userId}/profile/edit`}>
        <button>Edit user</button>
      </Link>
    </div>
  );
}

export default MyProfile;
