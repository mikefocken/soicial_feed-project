import Post from "../Post/Post";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post,i) => (
    <Post key={i} postObj={post} />
  ));
  return <div className="flex-item2">{postItems}</div>;
};

export default PostList;
