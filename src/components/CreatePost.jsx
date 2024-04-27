import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = "http://localhost:5005";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [service, setService] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [selectedService, setSelectedService] = useState("");

  const allServicesArray = [
    "Childcare",
    "Pets",
    "Motoring",
    "Tuition & Classes",
    "Health & Beauty",
    "Property & Maintenance",
  ];

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      user: user._id,
      service: selectedService[0]._id,
      description,
      price,
    };

    axios
      .post(`${API_URL}/api/post`, requestBody)
      .then((response) => {
        setTitle(""), setDescription(""), setPrice(0);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/services`).then((response) => {
      setAllServices(response.data);
    });
  }, []);

  function filterService(serviceParam) {
    const filteredService = allServices.filter((oneService) => {
      return oneService.category === serviceParam;
    });

    setService(filteredService);
  }
  function filterCategory(subcategory) {
    const filteredCategories = service.filter((oneSubcategory) => {
      return oneSubcategory.subcategory === subcategory;
    });
    setSelectedService(filteredCategories);
  }

  return (
    <div className="Create-post-form-container">
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit} className="form-create">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          placeholder="€/hour"
          type="number"
          name="price"
          min={0}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          onChange={(e) => {
            filterService(e.target.value);
          }}
          name="category"
          className="category-select"
        >
          <option value="">Please choose a category</option>
          {allServicesArray.map((serviceOne) => {
            return (
              <option key={serviceOne} value={serviceOne}>
                {serviceOne}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => {
            filterCategory(e.target.value);
          }}
          name="subcategory"
          className="subcategory-select"
        >
          <option value="">Please choose a subcategory</option>
          {service.map((oneChosenSub) => {
            return (
              <option
                key={oneChosenSub.subcategory}
                value={oneChosenSub.subcategory}
              >
                {oneChosenSub.subcategory}
              </option>
            );
          })}
        </select>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
