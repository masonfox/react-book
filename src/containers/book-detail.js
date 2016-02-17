import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className="col s12 m7 init-book"><h5>Select a book to get started</h5></div>;
    }

    return (
      <div className="col s12 m7 book-detail">
        <div className="book-detail-head">
          <h5>Details for:</h5>
        </div>
        <div className="book-detail-body">
          <div>{this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)
