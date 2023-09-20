import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Notes.css";
import NotesHeader from "./components/NotesHeader/NotesHeader";

const api = axios.create({ baseURL: "http://localhost:8080/" });

export default function NoteList() {
  const [notelists, setNotelists] = useState([]);
  const [option, setOption] = useState(null);

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

  function handleClick(id) {
    if (option !== null) {
      option.style.display = "none";
    }

    setOption(document.getElementById(`option-container-${id}`));
    option.style.display = option.style.display === "none" ? "block" : "none";
  }

  const notelist = notelists.map((note) => (
    <li key={note.id} className="note-item">
      <span>
        <Link to={`/note/${note.note_id}`} className="note-title">
          {note.name}
        </Link>
      </span>
      <span className="note-date">{note.created_at.slice(0, 10)}</span>
      <button onClick={() => handleClick(note.id)}>
        <img src="/ThreeDots.svg" />
      </button>
      <div id={`option-container-${note.id}`} className="option-container">
        <button>Rename</button>
        <br />
        <button>Delete</button>
      </div>
    </li>
  ));

  return (
    <>
      <NotesHeader />
      <ul className="notes">{notelist}</ul>
    </>
  );
}
