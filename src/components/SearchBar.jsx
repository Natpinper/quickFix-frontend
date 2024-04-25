import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";
import postService from "../services/Post.service";
import PostCard from "./PostCard";
import "../styles/SearchBarResults.css";
function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = (value) => {
    fetch("https://quickfix-backend.adaptable.app/api/post")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((post) => {
          return (
            (value && post.title && post.title.toLowerCase().includes(value)) ||
            (value &&
              post.service.category &&
              post.service.category.toLowerCase().includes(value)) ||
            (value &&
              post.service.subcategory &&
              post.service.subcategory.toLowerCase().includes(value))
          );
        });
        setResults(results);
        console.log(results);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="search-bar-container">
      <div className="searchbar-outter">
        <FaSearch id="search-icon" />
        <input className="searchbar-input"
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className="search-bar-results">
        <div className="PostListResults">
          {results.map((post) => (
              <PostCard key={post._id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
