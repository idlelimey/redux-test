import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage} from './actions';
import { Container, Row, Col } from 'reactstrap';
import data from './data/data.json';


class Posts extends Component {
    getData(){
        let markup = '';
        data.posts.forEach( (post) => {
            markup += '<div class="col-12 col-md-6">';
            markup += `<h2>${post.title}</h2>`;
            if( post.subtitle ){
                if ( post.subtitle != undefined ){
                    markup += `<p class="lead">${post.subtitle}</p>`;
                }
            }
            markup += `${post.body}`;
            markup += '</div>';
        });
        return {__html:`${markup}`};
    }

    componentDidMount() {
        this.props.setPage();
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <h1>A Posts Page</h1>
                        <p>Posts taken from JSON file containing various app data.  From here we are just pulling <code>posts</code>.</p>
                    </Col>
                </Row>

                <Row dangerouslySetInnerHTML = {this.getData()} />

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
})(Posts);