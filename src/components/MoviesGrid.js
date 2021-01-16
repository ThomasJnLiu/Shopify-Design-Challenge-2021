import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesGrid = ({ newMovies }) => {
  if (newMovies === undefined) {
    return (
      <>
        <div className="movies">undefined</div>
      </>
    );
  } else {
    return (
      <div className="movies">
        {newMovies.map((movie, index) => {
          console.log(movie.Title);
          return (
            <>
              <MoviesCard key={index} movie={movie} />
            </>
          );
        })}
      </div>
    );
  }
  // if (newMovies === undefined) {
  // } else {
  //   return (
  //     <div>
  //       {newMovies.map((movie, index) => {
  //         <h1 key={index}>{movie.Title}</h1>;
  //       })}
  //     </div>
  //   );
  // }
};

export default MoviesGrid;
