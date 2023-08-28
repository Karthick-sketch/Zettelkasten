import React from "react";
import "./Title.css";

export default function Title({ title }) {
  return (
    <div className="title-container">
      <p>{title}</p>
      <button className="edit-title">
        <img src="/pencil.svg" alt="Edit title" />
      </button>
    </div>
  );
}
