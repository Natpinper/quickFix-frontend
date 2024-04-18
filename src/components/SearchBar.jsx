import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";
import postService from "../services/Post.service";
import PostCard from "./PostCard";
function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = (value) => {
    fetch("http://localhost:5005/api/post")
    .then((response)=> response.json())
      .then((json) => {
       const results= json.filter((post)=>{
        return value && post.title && post.title.toLowerCase().includes(value) || value && post.service.category && post.service.category.toLowerCase().includes(value) || value && post.service.subcategory && post.service.subcategory.toLowerCase().includes(value)
       });
       setResults(results)
       console.log(results)
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="search-bar-container">
    <div className="input">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
    {results.map((post)=>(
        <PostCard key={post._id} {...post} />))}
    </div>
  );
}

export default SearchBar;
