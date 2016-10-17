import React, { PropTypes } from 'react';

class NewPost extends React.Component {
  addPost = () => {
    const p = {
      id: Math.random().toString(32),
      title: this.refs.title.value,
      author: this.refs.author.value,
      content: this.refs.content.value,
    }
    this.props.addPost(p)
  }
  render() {
    return (
      <div>
        <h2>新建post</h2>
        <form>
          <p>
            <label htmlFor="title">标题:</label>
            <input id="title" type="text" name="title" ref="title" />
          </p>
          <p>
            <label htmlFor="author">作者:</label>
            <input id="author" type="text" name="author" ref="author" />
          </p>
          <p>
            <label htmlFor="content">内容:</label>
            <input id="content" type="text" name="content" ref="content" />
          </p>
          <p>
            <button type="button" onClick={this.addPost}>提交</button>
          </p>
        </form>
      </div>
    )
  }
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default NewPost;
