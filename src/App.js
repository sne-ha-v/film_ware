//import { useState, useEffect } from 'react';
//import './App.css';

/* const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.Age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} lastName = {'Doe'} Age = {'25'}/>
      <Person name={'Sneha'} lastName = {'Venkatesh'} Age = {'25'}/>
      <Person name= "marry" lastName = 'Venkatesh' Age = {'25'}/>
    </div>
  );
}  */

/* const App = () => {
  const [counter, setCounter] = useState(0); //use State hook [ ] is array destructing if use is used its called hook call secound variable as same as first add set 
  
  useEffect(() => {
    //counter = 100;//never mutatate state maually 
    alert("you have changed counter to " + counter)

  }, [counter]);//dependency array we have set our dependency array to be empty

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
} */

//export default App;

import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=f2334ee8";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;