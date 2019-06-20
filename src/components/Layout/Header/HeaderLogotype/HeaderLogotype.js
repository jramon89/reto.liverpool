import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderLogotype extends Component {
	static propTypes = {
		href: PropTypes.string
	}
	render() {
		const { href } = this.props;
		return(
			<div className="header-logotype">
				<div className="header-title" style={{
					display: "flex",
    				flexDirection: "column"
				}}>
					<img src="./images/logo--eliptic-svg-v-1.1.svg" width="40px"/>
					{/*<Link to="/">UNNUBU</Link>*/}
				</div>
			</div>
		);
	}
}
export default HeaderLogotype;
