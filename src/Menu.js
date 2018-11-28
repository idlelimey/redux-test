import React, { Component } from 'react';
import { 
    //Link,
    NavLink as RRNavLink 
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Button,
    ButtonGroup,
    Container,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    Collapse
} from 'reactstrap';
import {
    setTheme
} from './actions';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse : false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Container id="menu" fluid className="no-padding fixed-top"> 
                <Collapse isOpen={this.state.collapse}>
                    <Container>
                        <Row>
                            <Col md="8" className="mb-5 mt-3">
                                <Nav vertical pills>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" exact to="/" onClick={this.toggle} >Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/page" onClick={this.toggle} >Example Page</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/posts" onClick={this.toggle} >Some Posts</NavLink>
                                    </NavItem>                                  
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/contact" onClick={this.toggle}>Example Form</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/cards" onClick={this.toggle} >Cards</NavLink>
                                    </NavItem>
                                </Nav> 
                            </Col>
                            <Col md="4">
                                <p>Change Theme:</p>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.props.setTheme('light')} active={this.props.site.theme === 'light'}>Light</Button>
                                    <Button color="primary" onClick={() => this.props.setTheme('dark')} active={this.props.site.theme === 'dark'}>Dark</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                </Collapse>
                <button onClick={this.toggle} id="nav-open" className={`menu-icon-button ${this.state.collapse}`}><span></span></button>
            </Container>
        );
    }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
    return {
        site: state.site
    };
}

export default connect(mapStateToProps, { setTheme })(Menu);