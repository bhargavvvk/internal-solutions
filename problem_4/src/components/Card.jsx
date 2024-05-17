import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>

      <div className="card-body">{props.children}</div>

      <a className="card-footer" href={props.link}>
        View
      </a>
    </div>
  );
};

export default Card;
