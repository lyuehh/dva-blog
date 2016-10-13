import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import PostList from '../components/PostList'

function BlogPage() {
  return (
    <div className={styles.normal}>
      <h1>Blog</h1>
      <PostList />
    </div>
  );
}

BlogPage.propTypes = {
};

export default connect()(BlogPage);
