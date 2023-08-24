import React from "react";
import "./App.css";
import Note from "./Note/Note";

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
  // const [value, setValue] = useState(note.body);
  return (
    <>
      <Note notes={notes} />
    </>
  );
}

export default App;
