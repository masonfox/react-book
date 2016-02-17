import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>Built by <a href="http://mason-fox.com/">Mason Fox</a>
          <span className="footer-left">during the <a href="https://udemy.com/react-redux">Modern React and Redux Course</a></span>
          <span className="footer-left">| Proudly powered by</span>
          <a href="https://facebook.github.io/react/">
            <img src="http://2015.reactjsday.it/img/confs/reactjs/logo-white.svg" />
          </a>
          <span className="footer-left">and <a href="http://redux.js.org/">Redux</a></span>
        </span>
        </footer>
      );
  }
}
