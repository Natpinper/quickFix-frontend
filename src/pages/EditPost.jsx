import React, { useEffect, useState } from 'react'
import postService from '../services/Post.service'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const API_URL = "http://localhost:5005";
function EditPost() {

    const [title, setTitle] = useState("")
    const [service, setService] = useState([])
    const [allServices, setAllServices] = useState([])
    const [selectedService, setSelectedService] = useState([]);
    const [category, setCategory]= useState("");
    const [subcategory, setSubcategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const allServicesArray = [
        "Childcare",
        "Pets",
        "Motoring",
        "Tuition & Classes",
        "Health & Beauty",
        "Property & Maintenance",
      ];

    const {postId} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
      axios.get(`${API_URL}/api/services`).then((response) => {
        setAllServices(response.data);
        console.log(allServices)
      });

        postService.getPostFromUser(postId)
        .then((response)=>{
            const onePost = response.data
            setTitle(onePost.title)
            setDescription(onePost.description)
            setPrice(onePost.price)
            setSelectedService(onePost.service)
            setCategory(onePost.service.category)
            setSubcategory(onePost.service.subcategory)
            console.log(onePost.service.category)
            console.log(onePost.service.subcategory)
            console.log(onePost.service)
            
      
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [postId])

    function filterService(categoryParam) {
        const filteredService = allServices.filter((oneService) => {
          return oneService.category === categoryParam;
        });
    
        setService(filteredService);
      }
      function filterCategory(subcategory) {
        const filteredCategories = service.filter((oneSubcategory) => {
          return oneSubcategory.subcategory === subcategory;
        });
        setSelectedService(filteredCategories);
      }
    

    const handleFormSubmit = (e)=>{
        e.preventDefault()

        const requestBody = { 
          title,
          service: selectedService._id, 
          description, 
          price
        };

        postService.updatePost(postId, requestBody)
        .then((response)=>{
          navigate(`/user/post/${postId}`)  
          alert("Post´s details have been updated")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="name"
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
      <button type='submit'>Submit changes</button>
      
      </form>
    </div>
  )
}

export default EditPost