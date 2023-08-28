import React from "react";
import Title from "../Title/Title";
import Editor from "../Editor/Editor";

export default function Note({ note }) {
  return (
    <>
      <Title title={note.title} />
      <Editor body={note.body} />
    </>
  );
}
