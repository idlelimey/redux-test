import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage } from './actions';
import { 
    Container,
    Row,
    Col,
    Button 
} from 'reactstrap';
import LightHomeBg from './images/light-home2.jpg';
// import DarkHomeBg from './images/dark-home.jpg';

const styles = {
    custom: {
        backgroundImage: `url(${LightHomeBg})`
    }
};

class Home extends Component {
    componentDidMount () {
        this.props.setPage();
    }
    render () {
        return (
            <Container fluid style={styles.custom} className="home-bg">
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
function mapStateToProps (state) {
    return {
        site: state.site
    };
}
export default connect(mapStateToProps, {
    setPage
})(Home);
