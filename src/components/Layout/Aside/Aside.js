import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Aside extends Component {
	static propTypes = {
		children: PropTypes.element
	}
	render() {
		const { children } = this.props;
		return(
			<div className="aside-content">
				<h1>
					Aside
				</h1>
			</div>
		);
	}
}
export default Aside;