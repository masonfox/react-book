import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <a
          href="#0"
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="collection-item waves-effect waves-light blue-text">{book.title}</a>
      );
    });
  }

  render() {
    return (
      <div className="col s12 m4 collection">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will be props in BookList -- SWEET!
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(BookList);
