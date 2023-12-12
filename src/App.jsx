import "./App.css";
import Header from "./components/Header/Header";
import CPostForm from "./components/CPostForm/CPostForm";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Header />
      <CPostForm/>
      <PostList />
    </div>
  );
}

export default App;
