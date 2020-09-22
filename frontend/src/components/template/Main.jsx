import "./Main.css";
import Header from "./Header";
import React from "react";

export default (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="content contaner-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </React.Fragment>
  );
};
