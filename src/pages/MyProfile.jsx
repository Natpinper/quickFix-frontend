import React, { useEffect, useState, useContext } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import userService from "../services/User.service";
import { AuthContext } from "../context/auth.context";
import { confirmAlert } from "react-confirm-alert";

function MyProfile() {
  const { user, setUser, isLoggedIn } = useContext(AuthContext);
  const { userId } = useParams();

  const navigate = useNavigate();

  const getUser = (userId) => {
    userService
      .getOneUser(userId)
      .then((response) => setUser)
      .catch((error) => console.log(error));
  };
  const deleteUser = (userId) => {
    userService.deleteUser(userId).then(() => {
      alert("The user has been deleted");
      isLoggedIn(false);
      navigate("/");
    });
  };

  const submitDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: deleteUser(userId),
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

      <Link to="/post/create">
        <button>Create new post</button>
      </Link>
      <button onClick={submitDelete}>Delete User</button>
      <Link to={`/${userId}/profile/edit`}>
        <button>Edit user</button>
      </Link>
    </div>
  );
}

export default MyProfile;
