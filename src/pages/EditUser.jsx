import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/User.service";

function EditUser() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
userService.getOneUser(userId)
.then((response)=>{
    const oneUser= response.data
    setName(oneUser.name)
    setLocation(oneUser.location)
})
.catch((err=>{
    console.log(err)
}))
  },[userId])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, location };

    userService.updateUser(userId, requestBody)
    .then((response) => {
      navigate("/profile");
      alert("User´s details have been updated");
    })
    .catch((err)=>{
        console.log(err)
    })
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Location:</label>
        <input
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
