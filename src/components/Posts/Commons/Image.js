import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Image extends Component {
	static propTypes = {
		image: PropTypes.string
	}

	render() {
		const { image } = this.props;
		return(
			<div className="category-img-container">
				<figure>
					<img src={image} alt="ej" width="200" />
				</figure>
			</div>
		);
	}
}
export default Image;
