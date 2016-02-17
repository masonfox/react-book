import React, { Component } from 'react';

import Nav from './nav';
import Jumbo from './jumbo';
import Footer from './footer';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Jumbo />
          <div className="row">
            <BookList />
            <BookDetail />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
