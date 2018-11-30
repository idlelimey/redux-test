import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from './actions';
import { Container, Row, Col, Input, Label, Button } from 'reactstrap';



class Contrast extends Component {
    constructor(props) {
        super(props);

        this.updateFGR = this.updateFGR.bind(this);
        this.updateFGG = this.updateFGG.bind(this);
        this.updateFGB = this.updateFGB.bind(this);
        this.updateBGR = this.updateBGR.bind(this);
        this.updateBGG = this.updateBGG.bind(this);
        this.updateBGB = this.updateBGB.bind(this);
        this.randomALL = this.randomALL.bind(this);

        this.state = { 
            fgr : 0,
            fgg : 0,
            fgb : 0,
            bgr : 255,
            bgg : 255,
            bgb : 255
        };
    }

    luminance(r, g, b) {
        let colorArray = [r, g, b],
            colorFactor,
            i;
        for (i = 0; i < colorArray.length; i++) {
            colorFactor = colorArray[i] / 255;
            if (colorFactor <= 0.03928) {
                colorFactor = colorFactor / 12.92;
            } else {
                colorFactor = Math.pow(((colorFactor + 0.055) / 1.055), 2.4);
            }
            colorArray[i] = colorFactor;
        }
        return (colorArray[0] * 0.2126 + colorArray[1] * 0.7152 + colorArray[2] * 0.0722) + 0.05;
    }

    contrastRatio() {
        let a,b,c,result;
        a = this.luminance(this.state.fgr,this.state.fgg,this.state.fgb);
        b = this.luminance(this.state.bgr,this.state.bgg,this.state.bgb);
        if(a < b){
            c = a;
            a = b;
            b = c;
        }
        result = a / b;
        return +(Math.round(result + 'e+' + 1)  + 'e-' + 1);
    }

    updateFGR(e) { this.setState({ fgr : e.target.value }); }
    updateFGG(e) { this.setState({ fgg : e.target.value }); }
    updateFGB(e) { this.setState({ fgb : e.target.value }); }
    updateBGR(e) { this.setState({ bgr : e.target.value }); }
    updateBGG(e) { this.setState({ bgg : e.target.value }); }
    updateBGB(e) { this.setState({ bgb : e.target.value }); }
    randomALL() {
        this.setState({
            fgr : Math.floor(Math.random() * 255) + 1,
            fgg : Math.floor(Math.random() * 255) + 1,
            fgb : Math.floor(Math.random() * 255) + 1,
            bgr : Math.floor(Math.random() * 255) + 1,
            bgg : Math.floor(Math.random() * 255) + 1,
            bgb : Math.floor(Math.random() * 255) + 1
        });
    }

    componentDidMount() {
        this.props.setPage();
    }

    render() {
        return (
            
            <Container>
                <Row>
                    <Col xs='12'>
                        <h1>Contrast Calculator</h1>
                        <p>Use this to calculate the contrast ratio of two colours.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='6' className='rgb-inputs'>
                        <Row>
                            <Col xs='12'>
                                <h3><span className='circle'style={{background: 'rgb(' + this.state.fgr + ',' + this.state.fgg + ',' + this.state.fgb + ')'}}></span>Foreground</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="fg-r">R</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="fg-r" placeholder="Red" value={this.state.fgr} onChange={this.updateFGR} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="fg-g">G</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="fg-g" placeholder="Green" value={this.state.fgg} onChange={this.updateFGG} />
                            </Col>
                        </Row>                           
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="fg-b">B</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="fg-b" placeholder="Blue" value={this.state.fgb} onChange={this.updateFGB} />
                            </Col>
                        </Row>                            
                    </Col>
                    <Col xs='12' md='6' className='rgb-inputs'>
                        <Row>
                            <Col xs='12'>
                                <h3><span className='circle' style={{background: 'rgb(' + this.state.bgr + ',' + this.state.bgg + ',' + this.state.bgb + ')'}}></span>Background</h3>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="bg-r">R</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="bg-r" placeholder="Red" value={this.state.bgr} onChange={this.updateBGR} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="bg-g">G</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="bg-g" placeholder="Green" value={this.state.bgg} onChange={this.updateBGG} />
                            </Col>
                        </Row>                           
                        <Row>
                            <Col xs='2' lg='1'>
                                <Label htmlFor="bg-b">B</Label>
                            </Col>
                            <Col xs='10' lg='11'>
                                <Input id="bg-b" placeholder="Blue" value={this.state.bgb} onChange={this.updateBGB} />
                            </Col>
                        </Row>                   
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='6'>
                        <Button color="primary" block onClick={this.randomALL}>Random Roll</Button>
                    </Col>
                    <Col xs='12' md='6'>
                        <p className="result">The contrast ratio is <strong>{this.contrastRatio()}:1</strong></p>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    <Col xs='12'>
                        <div id="example" style={{background: 'rgb(' + this.state.bgr + ',' + this.state.bgg + ',' + this.state.bgb + ')'}}>
                            <p style={{
                                color: 'rgb(' + this.state.fgr + ',' + this.state.fgg + ',' + this.state.fgb + ')',
                                fontSize: 3+'rem'
                            }}>Large Text</p>
                            <p style={{color: 'rgb(' + this.state.fgr + ',' + this.state.fgg + ',' + this.state.fgb + ')'}}>The quick brown fox jumps over the lazy dog.</p>
                            <p style={{color: 'rgb(' + this.state.fgr + ',' + this.state.fgg + ',' + this.state.fgb + ')'}}>The current contrast ratio is {this.contrastRatio()}:1.  WCAG rules are 4.5:1 for AA and 7:1 for AAA.</p>
                        </div>
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
})(Contrast);