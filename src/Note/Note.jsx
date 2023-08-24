import React from "react";
import NoteList from "./components/NoteList/NoteList";

export default function Note({ notes }) {
  return (
    <>
      <NoteList notes={notes} />
    </>
  );
}
