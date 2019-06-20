import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../../components/Layout/Nav/Nav';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
// import { getFilteredPost } from '../../actions/actionsPosts';

import {
	fetchMenuItems,
	getMenuItems,
	setScrollValue,
	fetchInitialData,

} from '../../actions/actionsLayout';


import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';


import { renderRoutes } from 'react-router-config';

@connect(state=>({
	data: state.layout,
	hide: state.events.hide,
	isScrolling: state.events.scroll.isScrolling,
}))
class Layout extends Component {
	
	static propTypes = {
		children: PropTypes.element,
		data: PropTypes.object
	};

	componentWillMount() {
		this.props.dispatch(getMenuItems());
	}

	scrolling(e) {
		const { dispatch } = this.props;
		let scrolling = Math.floor(e.target.scrollingElement.scrollTop) >= (this.header.offsetHeight +
			this.nav.offsetHeight) && e.target.scrollingElement.scrollHeight >= 1000;
		if(scrolling){
			this.nav.classList.add('scrolling');
		}else{
			this.nav.classList.remove('scrolling');
		}
		dispatch(setScrollValue({top: Math.floor(e.target.scrollingElement.scrollTop),
			height: Math.floor(e.target.scrollingElement.scrollHeight),
			isScrolling: scrolling}));
	}
	
	componentDidMount() {
		document.addEventListener('scroll', this.scrolling.bind(this));
	}
	
	onSubmit(value) {
		const { history } = this.props;

		history.push(`/search/${value}`);
	}
	render() {
		const {
			data,
			params,
			hide,
			location,
			dispatch,
			isScrolling,
			posts
		} = this.props;
		const hidden = hide ? 'hidden' : '';
        return(
			<section className="content">
				<header className={`header header-top ${hidden}`} ref={ (header) => this.header = header }>
					<Header
						onSubmit={this.onSubmit.bind(this)}
						hidden={hidden}
						location={ location }
						socialItem={data.social}
						dispatch={dispatch}/>
					<nav className={`menu ${hidden}`} ref={ (nav) => this.nav = nav }>
						<Nav
							onSubmit={this.onSubmit.bind(this)}
							items={data.menu}
							value={ params && params.id ? params.id : null  }
							location={ location }
							dispatch={ this.props.dispatch }
							isScrolling={ isScrolling }
							posts={ posts }/>
					</nav>
				</header>

				<section className="section">
					<div className="category-container">
						{
							renderRoutes(this.props.route.routes)
						}
					</div>
				</section>
				<footer>
					<Footer 
						items={data.menu}/>
				</footer>
			</section>
		);
	}
}
export default withRouter(hot(module)(Layout));