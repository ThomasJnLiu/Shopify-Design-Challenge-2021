import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const APIComponent = () => {
  const url = "http://www.omdbapi.com/?apikey=e95d3a07&s=batman";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, [url]);

  if (product) {
    return (
      <>
        <h1>{product.Title}</h1>
        <img src={product.Poster} />
      </>
    );
  }

  return <></>;
};

export default APIComponent;
