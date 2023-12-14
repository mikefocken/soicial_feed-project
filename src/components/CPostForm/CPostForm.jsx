import React, { useState } from "react";
import "./CPostForm.css";

const CPostForm = ({ onNewPost }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      postMessage: post,
    };
    onNewPost(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <div className="flexitem1">
        <label>Name</label> 
        <input value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div>
        <label>Post</label>
        <input value={post} onChange={(e) => setPost(e.target.value)} />
      </div>
      <button type="submit"> Create</button>
    </form>
  );
};

export default CPostForm;
