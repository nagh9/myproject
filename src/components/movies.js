import { useState } from "react";
import { movies } from "../MovieData/Data";

const Movies = () => {
    const [moviesData, setMoviesData] = useState(movies);
    const [search, setSearch] = useState("");
    const [newMovie, setNewMovie] = useState({
        id :"",
        name: "",
        description: "",
        rayting:"",
    });

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
    };
    

    const addMovie = (newMovie) => {e.preventDefault();
        setMoviesData([...moviesData, newMovie]);
    };
    const filterdMovies = moviesData.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <input type="search" placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            {filterdMovies.map((movie) => (

                <div key={movie.id}>
                    <h1>{movie.name}</h1>
                    <p>{movie.description}</p>
                   
                        <button>View</button>
                    
                </div>

            ))
            }
            <form onSubmit={(e) => addMovie(newMovie)}>
                <input type="text" name="name"
                    onChange={handleChange}
                />
                <input type="text" name="description"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >Add Movie</button>

            </form>
        </div>
    );
};

export default Movies;