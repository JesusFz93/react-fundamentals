import React from "react";

const Title = ({ titulo, saludo }) => {
  return (
    <>
      <header>
        <h1>Estas en la pagina {titulo}</h1>
        <h2>{saludo}</h2>
      </header>
    </>
  );
};

export default Title;
