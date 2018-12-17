import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from './actions';
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
import contacts from './data/data.json';


class Contact extends Component {
    getContacts(){
        let markup = '';
        contacts.people.forEach( (person) => {
            markup += `<li><a href="mailto:${person.email}">${person.name}</a> (${person.age})</li>`;
        });
        return {__html:`<ul>${markup}</ul>`};
    }
    componentDidMount() {
        this.props.setPage();
    }
    render() {
        return (
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <h1>A Form Page</h1>
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
                    <Row>
                        <Col xs="12">
                            <h2>Contacts</h2>
                            <p>Contacts taken from JSON file containing various app data.  From here we are just pulling <code>people</code>.</p>
                        </Col>
                        <Col dangerouslySetInnerHTML = {this.getContacts()} />
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