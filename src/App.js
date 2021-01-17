import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import MoviesGrid from "./components/MoviesGrid";
import Nominations from "./components/Nominations";

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
    <div className="App">
      <Search getResult={(r) => setMovies(r)} />
      <div className="content">
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
