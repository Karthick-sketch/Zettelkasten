import React from "react";
import "./NoteTitle.css";

export default function NoteTitle({ title }) {
  return (
    <div className="title-container">
      <p>{title}</p>
      <button className="edit-title">
        <img src="/pencil.svg" alt="Edit title" />
      </button>
    </div>
  );
}
