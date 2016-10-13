import React from 'react';
import Post from './Post'

const PostList = (props) => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

PostList.propTypes = {
};

export default PostList;
