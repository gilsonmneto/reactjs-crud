import "./Main.css";
import Header from "./Header";
import React, { Component } from "react";

export default (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">Navegação</main>
    </React.Fragment>
  );
};