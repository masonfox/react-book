import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <a href="#!" className="brand-logo center"><span className="material-icons book-logo">library_books</span>Book Selector</a>
          </div>
        </nav>
      </div>
    )
  }
}
