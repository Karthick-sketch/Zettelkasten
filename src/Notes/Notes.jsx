import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

export default function NoteList({ notes }) {
  const noteLists = notes.map((note) => (
    <tr key={note.referenceId} className="note-item">
      <td>
        <Link to={`/note/${note.referenceId}`}>{note.title}</Link>
      </td>
      <td>{note.createdAt.toString()}</td>
      <td>{note.updatedAt.toString()}</td>
      <td>:</td>
    </tr>
  ));

  return (
    <>
      <table className="notelist-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{noteLists}</tbody>
      </table>
    </>
  );
}
