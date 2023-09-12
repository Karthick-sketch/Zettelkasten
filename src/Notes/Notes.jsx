import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Notes.css";
import NotesHeader from "./components/NotesHeader/NotesHeader";

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
    <li key={note.id} className="note-item">
      <span>
        <Link to={`/note/${note.reference_id}`} className="note-title">
          {note.title}
        </Link>
      </span>
      <span className="note-date">{note.updated_at}</span>
      <button>
        <img src="/ThreeDots.svg" />
      </button>
    </li>
  ));

  return (
    <>
      <NotesHeader />
      <ul className="notes">{notelist}</ul>
    </>
  );
}
