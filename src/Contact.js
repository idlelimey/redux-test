import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage} from './actions';
import { 
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


class Contact extends Component {
    componentDidMount() {
        this.props.setPage();
    }
    render() {
        return (
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Form Page</h1>

                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="c-email" id="c-email" placeholder="Email Address" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Name</Label>
                                    <Input type="text" name="c-name" id="c-name" placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Message</Label>
                                    <Input type="textarea" name="c-message" id="c-message" rows="4" placeholder="Message" />
                                </FormGroup>
                                <Button color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </Container>    
                </Form>   
        );
    }
}

// Required for setPage
function mapStateToProps(state) {
    return {
        site: state.site
    };
}
export default connect(mapStateToProps, {
    setPage
})(Contact);