import React from "react";

const Nominations = ({ movies, onRemove, nominationCapped }) => {
  console.log(nominationCapped);
  return (
    <div className="nominations">
      <h1>Nominations (Max 5)</h1>
      {movies.length === 0 && <div>No Nominations</div>}

      <ul>
        {movies.map((movies, key) => {
          return (
            <li key={key}>
              <button onClick={() => onRemove(movies)}>X</button>
              {movies.Title}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          if (nominationCapped)
            window.alert("Your nominations have been submitted!");
        }}
        className={
          nominationCapped ? "nominate-button" : "nominate-button-disabled"
        }
      >
        <p>Submit</p>
      </button>
    </div>
  );
};

export default Nominations;
