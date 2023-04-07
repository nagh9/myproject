import { useState } from "react";
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";
import { movies } from "../MovieData/Data";

 const Page = ({ search }) => {
  const [moviesData, setMoviesData] = useState(movies);

  return (
    <>
      <MovieList
        search={search}
        moviesData={moviesData}
      />
      <AddMovie moviesData={moviesData} setMoviesData={setMoviesData} />
    </>
  );
};
export default Page;



