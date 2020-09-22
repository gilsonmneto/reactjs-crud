import "./Navitem.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Link to={props.pageLink} className="item">
      <i className={`fa fa-${props.icon}`}></i> {props.item}
    </Link>
  );
};
