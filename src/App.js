import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import APIComponent from "./components/APIComponent";
import Search from "./components/Search";
import MoviesGrid from "./components/MoviesGrid";
import Nominations from "./components/Nominations";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [nominationCapped, setNominationCapped] = useState(false);
  const onAdd = (nomMovie) => {
    const exist = nominations.find((x) => x.imdbID === nomMovie.imdbID);
    if (exist) {
    } else {
      if (nominations.length < 5) {
        setNominations([...nominations, { ...nomMovie }]);
      }
    }
    // if (exist) {
    //   // setNominations(
    //   //   // nominations.map((x) =>
    //   //   //   x.id === nomMovie.id ? { ...exist, qty: exist.qty + 1 } : x
    //   //   // )
    //   // );
    // } else {
    // }
  };

  const onRemove = (nomMovie) => {
    const nom2 = [...nominations];
    const index = nom2.indexOf(nomMovie);

    nom2.splice(index, 1);
    setNominations(nom2);
  };

  useEffect(() => {
    if (nominations.length === 5) {
      setNominationCapped(true);
    } else {
      setNominationCapped(false);
    }
    console.log(nominationCapped);
  }, [nominations]);
  // const url = "http://www.omdbapi.com/?apikey=e95d3a07&s=";
  // const [query, setQuery] = useState("");
  // const [response, setResponse] = useState(false);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchitems = async () => {
  //     const result = await axios(
  //       `http://www.omdbapi.com/?apikey=e95d3a07&s=${query}`
  //     );
  //     if (result.data.Response) {
  //       console.log(result.data.Search);
  //       setResponse(result.data.Response);
  //       setData(result.data);
  //     }
  //   };

  //   fetchitems();
  // }, [query]);

  return (
    <div className="App">
      <Search getResult={(r) => setMovies(r)} />
      <div className="content">
        {" "}
        <MoviesGrid
          onAdd={onAdd}
          newMovies={movies}
          nominations={nominations}
        />
        <Nominations
          onRemove={onRemove}
          movies={nominations}
          nominationCapped={nominationCapped}
        />
      </div>
    </div>
  );
};

export default App;
