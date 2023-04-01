
import React, { useState , useEffect } from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";



const MoviesData=[
    {
    title:"Dr house",
    description:"An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.", 
    poster: "",
    rating:"8.7/10",
    },
    {
    title: "Encanto",
    description:"",
    rating: "7/10",
    poster: ""

    },
    {
    title:"Turning Red",
    description:"",
        rating:"7/10",
        poster:""
    }]
function App() {

    const [list, setList] = useState(MoviesData);
    const [filtredList, setFiltredList] = useState(list);
    const [rate, setRate] = useState(0);
    const [keyword, setKeyword] = useState("");


      function filter(key, rate) {
        setKeyword(key);
        setRate(rate);
        setFiltredList(
          list.filter((element) => {
            return (
              element.title.toLowerCase().includes(key.toLowerCase()) &&
              element.rating >= rate
            );
          })
        );
      }
      useEffect(() => {
        filter(keyword, rate);},
        [list]);
    
    
      
    return (
        <div className="App">
             <div className="Navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand>Movies App </Navbar.Brand>
              <Nav>
                <Filter filter={filter} />
              </Nav>
            </Navbar>
          </div>
          <div>
            <MovieList list={filtredList} />
          </div>
    </div>
  );
}
export default App;


