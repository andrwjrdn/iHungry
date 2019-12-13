import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = "9fb7d1e8";
  const APP_KEY = "df9da258605c678894a8dd1e936d1271";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form> 
      {recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
  
    </div>
  )
}
export default App;


