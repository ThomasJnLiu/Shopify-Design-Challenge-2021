import React, { useEffect } from "react";
import MoviesCard from "./MoviesCard";
import loadingPic from "../loading.gif";

const MoviesGrid = ({ newMovies, onAdd, nominations, loading }) => {
  useEffect(() => {
    console.log("movies loading " + loading);
  }, [loading]);
  if (loading) {
    return (
      <img
        src={loadingPic}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    );
  } else {
    if (newMovies === undefined) {
      return (
        <>
          <div
            className="movies"
            style={{ margin: "auto", display: "block", textAlign: "center" }}
          >
            No Movies Found
          </div>
        </>
      );
    } else {
      return (
        <div className="movies">
          {newMovies.map((movie, index) => {
            const alreadyNominated = nominations.find(
              (x) => x.imdbID === movie.imdbID
            );
            if (alreadyNominated) {
              return (
                <>
                  <MoviesCard
                    key={index}
                    movie={movie}
                    onAdd={onAdd}
                    isNominated
                  />
                </>
              );
            }
            return (
              <>
                <MoviesCard key={index} movie={movie} onAdd={onAdd} />
              </>
            );
          })}
        </div>
      );
    }
  }
};

export default MoviesGrid;
