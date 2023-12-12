import "./App.css";
import Header from "./components/Header/Header";
import CPostForm from "./components/CPostForm/CPostForm";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <CPostForm />
        <PostList />
      </div>
    </div>
  );
}

export default App;
