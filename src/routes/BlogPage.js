import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import PostList from '../components/PostList'
import NewPost from '../components/NewPost'

function BlogPage({ location, dispatch, blog }) {
  function addPost(post) {
    dispatch({
      type: 'blog/addPost',
      payload: post
    })
  }

  return (
    <div className={styles.normal}>
      <h1>Blog</h1>
      {
        blog.loading ? <p>loading...</p> : ''
      }
      <PostList posts={blog.posts} />
      <NewPost addPost={addPost} />
    </div>
  );
}

BlogPage.propTypes = {
  blog: PropTypes.object.isRequired
};

function mapStateToProps({ blog }) {
  return { blog };
}

export default connect(mapStateToProps)(BlogPage);
