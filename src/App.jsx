import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./Notes/Notes";
import Note from "./Notes/components/Note/Note";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/note/*" element={<Note />} />
      </Routes>
    </>
  );
}

export default App;
