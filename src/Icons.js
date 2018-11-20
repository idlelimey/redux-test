import React from 'react';
import { Tooltip } from 'reactstrap';
import './images/icons.svg';

//console.log(this.props.site.theme);




class Icon extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen : false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen : !this.state.tooltipOpen
        });
    }

    render() {
        let size        = this.props.size === undefined ? ' md' : ` ${this.props.size}`;
        let center      = this.props.center === true ? ' center' : '';
        let ttposition  = this.props.tooltipPosition ? this.tooltipPosition : 'top';
        return (
            <div>

                <svg id={`icon-${this.props.name}`} className={`icon ${size} ${center}`} title={this.props.name}>
                    <use xlinkHref={`#${this.props.name}`} />
                </svg>

                <Tooltip placement={ttposition} isOpen={this.state.tooltipOpen} autohide={false} target={`icon-${this.props.name}`} toggle={this.toggle}>{this.props.tooltip}</Tooltip> 

            </div>
        );
    }
}

export default Icon;