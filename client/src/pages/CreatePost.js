import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../components/Editor";
// import { MYSITE } from "../../../server/config/keys";

// const MYSITE = "http://localhost:4000";

const MYSITE = "http://k-bytes-server.vercel.app";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch(MYSITE + "/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="grid place-content-center mt-10 p-2 ">
      <div className="p-3 shadow-md shadow-gray-300 border-gray-200 border-2 rounded-md">
        <h1 className="text-center text-2xl pb-2">Create Post</h1>
        <form onSubmit={createNewPost} className="flex flex-col py-2 gap-1">
          <label className="py-2 font-semibold">Title</label>
          <input
            type="title"
            placeholder={"Title"}
            className="border-2 border-black-500 rounded-lg p-1"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <label className="py-2 font-semibold">Summary</label>
          <input
            type="summary"
            placeholder={"Summary"}
            className="border-2 border-black-500 rounded-lg p-1"
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
          <label className="py-2 font-semibold">Cover Image</label>
          <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
          <label className="py-2 font-semibold">Article</label>
          <Editor className="mb-2" value={content} onChange={setContent} />
          <button className="font-semibold bg-red-300 py-2">Create post</button>
        </form>
      </div>
    </div>
  );
}
