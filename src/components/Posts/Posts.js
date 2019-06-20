import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './Commons/Container.js';

class Posts extends Component {
	static propTypes = {
		data: PropTypes.array,
		meta: PropTypes.object,
		style: PropTypes.string
	};

	componentWillReceiveProps(nextProps, nextContext) {
		const {
			meta:{
				title,
				description
			}
		} = nextProps;
		document.title = title;
		document.all.description.content = description;
	}

	render() {
		const {
			data,
			style
		} = this.props;
		const list = data.map((value, index) => {
			return (
				<div className="cotegory-content-item" key={index}>
					<Container
						icon={ value.icon }
						image="./images/background_web_js.JPG"
						title={ value.title }
						seoTitle={ value.seoTitle }
						pathname={ value.pathname }
						category={ value.category }
						id={ value.catId }/>
				</div>
			);
		});
		return(
			<div className={`category-content ${style}`}>
				{ list }
			</div>
		);
	}
}
export default Posts;