import React from 'react';
import Post from './Post'

const PostList = (props) => {
  const posts = props.posts

  return (
    <div>
      {
        posts.map(p => {
          return <Post post={p} key={p.id} />
        })
      }
    </div>
  );
};

PostList.propTypes = {
};

export default PostList;
