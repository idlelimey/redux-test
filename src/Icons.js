import React from 'react';

import './images/icons.svg';

//console.log(this.props.site.theme);




class Icon extends React.Component {
    
    render() {
        let size = this.props.size === undefined ? ' md' : ' ' + this.props.size;
        let center = this.props.center === true ? ' center' : '';
        return (

            <svg className={'icon icon-' + this.props.name + size + center} title={this.props.name}>
                <use xlinkHref={`#${this.props.name}`} />
            </svg>             

        );
    }
}

export default Icon