import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage} from './actions';
import { Container, Row, Col } from 'reactstrap';
import HomeBg from './images/home.jpg';

const styles = {
    custom: {
        backgroundImage : `url(${HomeBg})`,
        backgroundSize  : 'cover',
        height          : '100vh'
    }
};

class Home extends Component {

    componentDidMount() {
        this.props.setPage();
    }
    
    render() {
        return (

            <Container style={styles.custom}>
                <Row className='align-items-center h-100'>
                    <Col>
                       
                        <p className="text-center lead">Hello.</p>
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