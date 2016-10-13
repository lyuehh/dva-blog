import React from 'react';

const Post = (props) => {
  const post = props.post

  return (
    <div>
      <h2>{post.title}</h2>
      <p>作者: {post.author}</p>
      <p>内容: {post.content}</p>
    </div>
  );
};

Post.propTypes = {
};

export default Post;
