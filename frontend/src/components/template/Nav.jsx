import "./Nav.css";
import React from "react";
import Navitem from "./Navitem";

export default (props) => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Navitem icon="home" item="Início" pageLink="/" />
        <Navitem icon="user" item="Usuário" pageLink="/users" />
      </nav>
    </aside>
  );
};
