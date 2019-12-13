import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = "9fb7d1e8";
  const APP_KEY = "df9da258605c678894a8dd1e936d1271";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}
export default App;
