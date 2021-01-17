import React, { useEffect } from "react";

const Nominations = ({ movies }) => {
  return (
    <div className="nominations">
      <h1>Nominations</h1>
      {movies.length === 0 && <div>No Nominations</div>}

      <ul>
        {movies.map((movies, key) => {
          return <li key={key}>{movies.Title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Nominations;
