import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Notes.css";

const api = axios.create({ baseURL: "http://localhost:8080/" });

export default function NoteList() {
  const [notelists, setNotelists] = useState([]);

  useEffect(() => {
    fetchNoteLists();
  }, []);

  async function fetchNoteLists() {
    try {
      const response = await api.get("notelist").then((res) => res);

      if (response.status === 200) {
        console.log(response.data);
        setNotelists(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const notelist = notelists.map((note) => (
    <tr key={note.id} className="note-item">
      <td>
        <Link to={`/note/${note.reference_id}`}>{note.title}</Link>
      </td>
      <td>{note.created_at.toString()}</td>
      <td>{note.updated_at.toString()}</td>
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
        <tbody>{notelist}</tbody>
      </table>
    </>
  );
}
