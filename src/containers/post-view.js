/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/containers/posts-view.js
 */

import React, { Component } from "react";
import { fetchPost } from "../actions/actions-root";
import { deletePost } from "../actions/actions-root";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
let items = [];

class PostView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  componentWillReceiveProps(nextProps) {
    items = [
      {
        header: nextProps.post.title,
        description: nextProps.post.content,
        meta: nextProps.post.categories,
        extra: this.getExtra(nextProps.post.id)
      }
    ];
  }

  onCardDeleteClick = (e, btn) => {
    this.props.deletePost(btn.id, () => {
      this.props.history.push("/");
    });
  };

  getExtra = id => {
    return (
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={this.onCardDeleteClick} id={id} basic color="red">
            Delete Post
          </Button>
        </div>
      </Card.Content>
    );
  };

  render() {
    return (
      <div>
        <Card.Group centered items={items} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostView);
