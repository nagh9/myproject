import React from "react";
import MovieCard from "./MovieCard";



function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (element,index)=>(
            <MovieCard key={index} element={element} />
        ))
        }
        </div>
    );
}

export default MovieList;