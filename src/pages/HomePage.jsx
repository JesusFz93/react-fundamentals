import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const HomePage = () => {
  const saludar = () => {
    console.log("Hola mundo");
  };

  return (
    <>
      <Navbar />
      <Title titulo="principal" saludo="Hola como estan?" />
      <main>
        <article>
          <button type="button" className="btn btn-primary" onClick={saludar}>
            Primary
          </button>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
