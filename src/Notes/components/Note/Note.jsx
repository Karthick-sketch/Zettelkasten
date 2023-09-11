import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../Title/Title";
import Editor from "../Editor/Editor";
import Content from "../Content";

const api = axios.create({ baseURL: "http://localhost:8080/" });

export default function Note() {
  const refId = useParams()["*"];
  const [editable, setEditable] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNoteByRefId();
  }, []);

  async function fetchNoteByRefId() {
    try {
      const response = await api.get(`note/${refId}`).then((res) => res);

      if (response.status === 200) {
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function toggleEdit() {
    setEditable(!editable);
  }

  return (
    <>
      <Title title={title} />
      <button onClick={toggleEdit}>Edit</button>
      {editable ? <Editor content={content} /> : <Content content={content} />}
    </>
  );
}
