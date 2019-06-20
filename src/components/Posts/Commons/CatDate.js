import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default
class CatDate extends Component {
	static propTypes = {
		category:PropTypes.string
	}
	

	render() {
		const { category } = this.props;

		return(
			<div className="category-date-info">
				<ul>
					<li>
						<p>
							<span className="fa fa-tag"></span>
							<span className="tag-text">{category}</span>
						</p>
					</li>
					<li>
						<p>
							<span className="fa fa-calendar"></span>
							<span className="date-text">19/03/2017</span>
						</p>
					</li>
				</ul>
			</div>
		);
	}
}
