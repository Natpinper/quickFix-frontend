import React, { useState } from 'react'

const subcategoriesByCategory = {
    Childcare: ["Nannies", "Babysitting"],
    Pets: ["Petsitting", "Training", "Vets"],
    "Property and Maintenance": ["Cleaners", "Housekeepers", "Interior Design", "TV & Internet connection" , "Plumber",  "Carpenter", "Electrician",  "Rubbish removal", "House renovation",  "Gardener" , "Painter" ],
    "Health and Beauty": ["Massages", "Hairdressing", "Beauty treatments","Personal trainer","Make Up Artist",  "Nail care","Nutrition" ],
    Motoring: ["Car repair and Mechanical services","Car wash", "MOT Testing"],
    "Tuition and Classes": ["Music", "Driving lessons", "Academic"]
}

function FilterHomePage() {
    const[category, setCategory]= useState("")
    const [subcategory, setSubcategory]= useState("")
    const [location, setLocation] = useState("")

    function populateSubcategories(e){
        const selectedCategory = e.target.value
        setCategory(selectedCategory)
        if (subcategoriesByCategory[selectedCategory]){
            setSubcategory('')
        } 
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          // Construct query parameters
          const queryParams = new URLSearchParams();
          if (category) queryParams.append('category', category);
          if (subcategory) queryParams.append('subcategory', subcategory);
          if (location) queryParams.append('location', location);
    
          // Fetch filtered posts
          const response = await fetch(`/posts?${queryParams.toString()}`);
          const posts = await response.json();
          
          // Handle the filtered posts (e.g., update state with the filtered posts)
          console.log(posts);
        } catch (error) {
          console.error(error);
        }
      }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <select name="category" id="category" value={category} onChange={populateSubcategories}>
        <option value="">Select a category</option>
        {Object.keys(subcategoriesByCategory).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <label htmlFor="subcategory">Subcategory:</label>
      <select name="subcategory" id="subcategory" value={subcategory} onChange={(event) => setSubcategory(event.target.value)}>
        <option value="">Select a subcategory</option>
        {subcategoriesByCategory[category] && subcategoriesByCategory[category].map((subcategory) => (
          <option key={subcategory} value={subcategory}>{subcategory}</option>
        ))}
      </select>

      <label htmlFor="location">Location:</label>
      <input type="text" name="location" id="location" value={location} onChange={(event) => setLocation(event.target.value)} />

      <button type="submit">Filter</button>
    </form>
    </div>
  )
}

export default FilterHomePage

