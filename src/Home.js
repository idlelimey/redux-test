import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage} from './actions';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import HomeBg from './images/home.jpg';

const styles = {
    custom: {
        backgroundImage     : `url(${HomeBg})`,
        backgroundSize      : 'cover',
        height              : '100vh',
        backgroundPosition  : '50% 100%'
    }
};

class Home extends Component {

    componentWillMount(){
        console.log('\'home\' will mount');
    }
        

    componentDidMount() {
        console.log('\'home\' did mount');
        this.props.setPage();
    }
    
    render() {
        return (
            <Container fluid style={styles.custom}>
                <Row className='align-items-center h-100'>
                    <Col>
                        <p className="text-center lead">Hello.</p>
                        <p className="text-center">
                            <Button outline color="dark" size="sm" tag={Link} to="/page">Page</Button>&nbsp;
                            <Button outline color="dark" size="sm" tag={Link} to="/cards">Cards</Button>
                        </p>

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
})(Home);