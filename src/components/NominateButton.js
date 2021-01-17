import React from "react";

const NominateButton = (props) => {
  const onAdd = props.onAdd;
  return (
    <button onClick={onAdd} class="nominate-button">
      <p>Nominate</p>
    </button>
  );
};

export default NominateButton;
