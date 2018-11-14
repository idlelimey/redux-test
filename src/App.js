import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <nav>
                        Nav Component goes here.
                    </nav>
                </Col>
            </Row>
            <Row>
                <Col>
                    <section id='content'>
                        Content goes here.  Install Router.
                    </section>
                </Col>
            </Row>
            <Row>
                <Col>
                    <footer>
                        Footer Component goes here.
                    </footer>
                </Col>
            </Row>
        </Container>
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
