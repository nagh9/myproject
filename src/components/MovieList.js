import React from "react";
import MovieCard from "./MovieCard";



function MovieList({search, moviesData,}){
    const filtredMovies =moviesData.filter((movie) => {
        return movie.title.tolowerCase().includes(search.tolowerCase());});
    

    return(
        <div className="MovieList">{
        filtredMovies.map( (movie)=>{
            return (
            <MovieCard key={movie.id} movie={movie} />
        );
        })}
        </div>
    );
}

export default MovieList;