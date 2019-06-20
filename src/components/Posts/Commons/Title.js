import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default
class Title extends Component {
	static propTypes = {
		title: PropTypes.string,
		seoTitle: PropTypes.string,
		pathname: PropTypes.string,
		category: PropTypes.string,
		id: PropTypes.number

	}
	
	seoUrl() {
		const {
			title,
			seoTitle,
			pathname,
			id,
			getDetails
		} = this.props;
		const cleanUrl = seoTitle; //title.replace(/\s/g,"-").toLowerCase();

		return `${pathname}/${cleanUrl}`;
	}
	getDetailsCat() {
		const { id, category } = this.props;
		localStorage.setItem(
			'itemSelected',
			JSON.stringify({
				category: category,
				id: id
			})
		)
	}
	render() {
		const { title, pathname } = this.props;

		return(
			<div className="category-title">
				<p><Link to={this.seoUrl()} onClick={this.getDetailsCat.bind(this)}>{title}</Link></p>
			</div>
		);
	}
}
