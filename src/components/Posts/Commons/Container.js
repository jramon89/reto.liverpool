import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Title from './Title';
import CatDate from './CatDate';
class Container extends Component {
	static propTypes = {
		icon: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		seoTitle: PropTypes.string.isRequired,
		pathname: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}

	render() {
		const {
			image,
			title,
			seoTitle,
			pathname,
			id,
			category,
			icon
		} = this.props;

		return(
			<div className="category-content-elements">
				{ /* <Image image={image}/> */ }
				<div className={`reference-graphic cat-${category}`}>
					<div className="icon">
						<i className={`fw ${icon === 'cogs' ? 'fas' : 'fab'} fa-${icon}`}></i>
					</div>
				</div>
				<Title
					title={title}
					seoTitle={ seoTitle }
					pathname={pathname}
					category={category}
					id={id}/>
				<CatDate category={category}/>

			</div>
		);
	}
} 
export default Container;