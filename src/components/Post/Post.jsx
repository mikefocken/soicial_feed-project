import React, { useState } from "react";
import './Post.css';

const Post = ({ postObj }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  console.log(isLike);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  const handleDislikeClick = () => {
    setIsDisLike(!isDisLike);
  };

  const btnLikeClass = isLike ? 'active-btn' : '';
  const btnDisLikeClass = isDisLike ? 'active-btn' : '';

  return (
    <div>
      <h4>{postObj.name}</h4>
      <div>
        <span>{postObj.postMessage}</span>
      </div>
      <button className={btnLikeClass} onClick={handleLikeClick} type="button">
        Like
      </button>
      <button className={btnDisLikeClass} onClick={handleDislikeClick} type="button">
        Dislike
      </button>
    </div>
  );
};

export default Post;

