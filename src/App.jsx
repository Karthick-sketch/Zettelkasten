import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Notes from "./Notes/Notes";
import Note from "./Notes/components/Note/Note";

const date = new Date();

const notes = [
  {
    referenceId: "abcd-efgh",
    title: "Example",
    body: "This is the <a href='example.com'>Example</a> site.",
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
  {
    referenceId: "ijkl-mnop",
    title: "Example",
    body: "This is the <a href='example.com'>Example</a> site.",
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route path="/note/:id" element={<Note note={notes[0]} />} />
      </Routes>
    </>
  );
}

export default App;
