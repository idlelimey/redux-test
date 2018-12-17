import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage} from './actions';
import { 
    Container,
    Row,
    Col,
    //ButtonGroup,
    Button,
    Card,
    CardHeader,
    //CardFooter,
    CardImg,
    CardText,
    CardBody,
    //CardLink,
    CardTitle,
    Label,
    Input
    //CardSubtitle
    //FormText 
} from 'reactstrap';
import data from './data/data.json';
import { Link } from 'react-router-dom';

/*
    TODO:
    1. Move relevant data to props.
    2. Use .filter << NO! It's not an array :( 
        ^^ Something like that but for objects.
    3. Need a count of how many cards displayed after filtering.
        a. Also need something to display when empty.
*/

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category    : undefined,
            filter      : [],
            count       : 0
        };
    }

    filterClick(selected) {
        const index = this.state.filter.indexOf(selected);
        if (index < 0) {
            this.state.filter.push(selected);
        } else {
            this.state.filter.splice(index, 1);
        }
        this.setState({ filter: [...this.state.filter] });
    }

    componentDidMount() {
        this.props.setPage();
    }

    render() {
        //console.table(data.cards);
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Cards Page</h1>
                        <p>Data generated from the data file pulling <code>cards</code>.</p>

                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Label for="category-select">Choose a category</Label>
                        <Input type="select" id="category-select">
                            <option onClick={() => this.setState({category : undefined})}>All Categories</option>
                            <option onClick={() => this.setState({category : 'Category One'})}>Category One</option>
                            <option onClick={() => this.setState({category : 'Category Two'})}>Category Two</option>
                            <option onClick={() => this.setState({category : 'Category Three'})}>Category Three</option>
                        </Input>                    
                    </Col>
                    <Col md={6}>
                        <Label for="category-select">Choose filters</Label>
                        <Button color="primary" onClick={() => this.filterClick('Good')} active={this.state.filter.includes('Good')}>Good</Button>
                        <Button color="primary" onClick={() => this.filterClick('Better')} active={this.state.filter.includes('Better')}>Better</Button>
                        <Button color="primary" onClick={() => this.filterClick('Best')} active={this.state.filter.includes('Best')}>Best</Button>
                        
                    </Col>
                </Row>

                <Row>

                    {Object.keys(data.cards).map( (i) => {
                        
                        if(data.cards[i].category === this.state.category || this.state.category === undefined){
                            if(this.state.filter.some(r=>data.cards[i].filter.includes(r)) || this.state.filter.length === 0){
                                return(
                                    <Col lg={4} key={i}>
                                        <Card className="mb-4">
                                            <CardImg top width="100%" src={data.cards[i].image} alt={data.cards[i].name} />
                                            <CardHeader>
                                                <h3>{data.cards[i].name}</h3>
                                            </CardHeader>
                                            <CardBody>
                                                <CardTitle>{data.cards[i].category}</CardTitle>
                                                <CardText>{data.cards[i].description.substr(0,128)+'\u2026'}</CardText>
                                                <Button tag={Link} to="/" color="primary" block>Link</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                );
                            }
                        }
                    })}



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
