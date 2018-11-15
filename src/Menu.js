import React, { Component } from 'react';
import { 
    //Link,
    NavLink as RRNavLink 
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
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
            <Container id="menu" className="no-padding fixed-top"> 
                <button onClick={this.toggle} id="nav-open" className={'menu-icon-button ' + this.state.collapse}><span></span></button>
                <Collapse isOpen={this.state.collapse}>
                    <Container>
                        <Row>
                            <Col>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" exact to="/" onClick={this.toggle}>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/page" onClick={this.toggle}>Page</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/contact" onClick={this.toggle}>Form</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName="active" to="/cards" onClick={this.toggle}>Cards</NavLink>
                                    </NavItem>
                                </Nav> 
                                <span className="menu-icon-button theme-switch" onClick={() => this.props.setTheme(this.props.site.theme)}>&#9680;</span>
                            </Col>

                        </Row>
                    </Container>
                </Collapse>
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
  
  
  export default connect(mapStateToProps, {
      setTheme
  })(Menu);