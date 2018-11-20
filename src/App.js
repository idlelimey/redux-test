import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
    Route,
    HashRouter
} from 'react-router-dom';

import { connect } from 'react-redux';
import {
    defaultFunction,
    setTheme,
    setPage
} from './actions';

import Menu     from './Menu';
import Home     from './Home';
import Page     from './Page';
import Contact  from './Contact';
import Cards    from './Cards';
import Footer   from './Footer';

class App extends Component {

    componentWillMount() {
        /* 
            WILL BE DEPRECATED FROM REACT v16.3.0
            Consider alternative.  Doesn't work in componentDidMount() :(
        */
        if(localStorage.getItem('theme')){
            this.props.site.theme = localStorage.getItem('theme');
        }        
    }

    componentDidMount() {
        this.props.defaultFunction();
    }

    showFooter(){
        if ( this.props.site.page === 'home' ) return null;
        return (<Footer />);
    }

    render() {
        return (
            <HashRouter>
                <Container fluid id='site' className={`${this.props.site.theme} ${this.props.site.page}`}>
                    <Menu currentTheme={this.props.site.theme} />
                    <section id='content'>
                        <Route exact path="/" component={Home} />
                        <Route path="/page" component={Page} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/cards" component={Cards} />
                    </section>
                    {this.showFooter()}
                </Container>
            </HashRouter>
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
    defaultFunction,
    setTheme,
    setPage
})(App);