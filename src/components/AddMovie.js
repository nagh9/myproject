import React from "react";
import { useState } from "react";



const AddMovieData = ({ setMoviesData, moviesData }) => {
  
  const [newMovie, setNewMovie] = useState({
    id: "",
    name: "",
    description: "",
  });

const handleChange = (e) => {
  setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
};

const addMovie = (newMovie) => {
  setMoviesData([...moviesData, newMovie]);
};

    return (
      <div>
        <form onSubmit={(e) => addMovie(newMovie)}>
                <input type="text" name="name"
                    onChange={handleChange}
                />
                <input type="text" name="description"
                    onChange={handleChange}
                />
                <button 
                    type="submit" 
                    onClick={() => {
                      addMovie({ ...newMovie, id: Math.random() * 1000 });
                    }}
                >Add Movie</button>
            </form>
            </div>

    )
  }
  export default AddMovieData;

