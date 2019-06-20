import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderAngle extends Component {
    static propTypes = {
        href: PropTypes.string,
        icon: PropTypes.string,
    };

    goBack() {
        window.history.back();
    }
    render() {
        const { icon } = this.props;
        const fa = icon ? 'fas fa-chevron-left' : icon;

        return(
            <div className="header-angle-content">
                <div className="header-angle">
                    <span className="fas fa-arrow-left" onClick={ this.goBack.bind(this) }></span>
                </div>
            </div>
        );
    }
}
export default HeaderAngle;
