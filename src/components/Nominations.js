import React from "react";

const Nominations = ({ movies, onRemove, nominationCapped }) => {
  return (
    <div className="nominations">
      <h1>Nominations (Please choose 5)</h1>
      {movies.length === 0 && (
        <div style={{ color: "#808080" }}>No Nominations</div>
      )}

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
