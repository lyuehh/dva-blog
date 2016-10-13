import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import PostList from '../components/PostList'

function BlogPage({ location, dispatch, blog }) {
  return (
    <div className={styles.normal}>
      <h1>Blog</h1>
      {
        blog.loading ? <p>loading...</p> : ''
      }
      <PostList posts={blog.posts} />
    </div>
  );
}

BlogPage.propTypes = {
};

function mapStateToProps({ blog }) {
  return { blog };
}

export default connect(mapStateToProps)(BlogPage);
