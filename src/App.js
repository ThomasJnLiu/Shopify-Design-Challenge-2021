import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Search from "./components/Search";
import MoviesGrid from "./components/MoviesGrid";
import Nominations from "./components/Nominations";
import Header from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [nominationCapped, setNominationCapped] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAdd = (nomMovie) => {
    const exist = nominations.find((x) => x.imdbID === nomMovie.imdbID);
    if (exist) {
    } else {
      if (nominations.length < 5) {
        setNominations([...nominations, { ...nomMovie }]);
      }
    }
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

  return (
    <>
      <Helmet>
        <title>The Shoppies</title>
      </Helmet>
      <div className="App">
        <Header />
        <Search
          getResult={(r) => setMovies(r)}
          getLoading={(l) => setLoading(l)}
        />
        <div className="content">
          {/* empty div is here for grid layout, removing it will cause
        movies to shift to left cells, there's 100% a better way to do this */}
          <div className="filler"></div>
          <Nominations
            onRemove={onRemove}
            movies={nominations}
            nominationCapped={nominationCapped}
          />
          <div className="movies-container">
            <MoviesGrid
              onAdd={onAdd}
              newMovies={movies}
              nominations={nominations}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
