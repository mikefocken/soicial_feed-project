import "./App.css";
import Header from "./components/Header/Header";
import CPostForm from "./components/CPostForm/CPostForm";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const selectedPost = {
    name: "Mike Focken",
    postMessage: "Please leave mesage here",
  };
  const handlePost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <CPostForm onNewPost={handlePost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
