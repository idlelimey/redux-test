import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
        <div>
            <nav>
                Nav Component goes here.
            </nav>
            <section id='content'>
                Content goes here.  Install Router.
            </section>
            <footer>
                Footer Component goes here.
            </footer>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
