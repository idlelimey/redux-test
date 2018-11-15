import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer>
            <Container>
                <Row className="display">
                    <Col xs={12}>
                        <p className="text-center">
                            <img src={require('./images/react.svg')} alt="Logo" className="logo" />
                        </p>
                    </Col>
                    <Col xs={12}>
                        <p className="text-center">Built with React</p>
                    </Col>
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                </Row>                
            </Container>
        </footer>
    );
  }
}

export default Footer;