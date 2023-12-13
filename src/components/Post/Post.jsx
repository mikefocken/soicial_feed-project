
const Post = ({postObj}) => {

  console.log(postObj)
  return (
    <div>
        <h4>{postObj.name}</h4>
      <div>
        <span>{postObj.postMessage}</span>
      </div>
    </div>
  );
};

export default Post;
