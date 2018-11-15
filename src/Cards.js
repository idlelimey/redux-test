import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage} from './actions';
import { 
    Container,
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    //CardImg,
    CardText,
    CardBody,
    //CardLink,
    CardTitle,
    //CardSubtitle
    //FormText 
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Cards extends Component {
    componentDidMount() {
        this.props.setPage();
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Cards Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <CardHeader>
                                <h2>Header</h2>
                            </CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button tag={Link} to="/" color="primary">Go Home</Button>
                            </CardBody>
                            <CardFooter>Footer</CardFooter>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <CardHeader>
                                <h2>Header</h2>
                            </CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button color="primary">Go somewhere</Button>
                            </CardBody>
                            <CardFooter>Footer</CardFooter>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <CardHeader>
                                <h2>Header</h2>
                            </CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button color="primary">Go somewhere</Button>
                            </CardBody>
                            <CardFooter>Footer</CardFooter>
                        </Card>
                    </Col>
                </Row>                  
            </Container>
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
})(Cards);
