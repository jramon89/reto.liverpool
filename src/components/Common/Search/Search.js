import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
//import { getFilteredCategory } from '../../actions/actionsTypes';
export default
class Search extends Component{

	static propTypes = {
		onSubmit: PropTypes.func,
		animation: PropTypes.bool,
		value: PropTypes.string,
		placeholder: PropTypes.string

	}

	constructor(props){
		super(props);
		this.state={
			active: false
		}
	}
	
	onToggle() {
		const { active } = this.state;

		this.setState({
			active: !active
		});
	}
	
	componentDidMount() {
	
		const { dispatch } = this.props;
	}

	onSubmitValue(e) {
		e.preventDefault();
		const { onSubmit } = this.props;
		onSubmit(this.refs.search.value);
	}

	render() {
		const { active } = this.state;

		const {
			animation,
			placeholder,
			value
		} = this.props;

		return(
			<form onSubmit={this.onSubmitValue.bind(this)}>
				{
					animation ?
						<div className="search">
							<div className={ active ? 'search-items active' : 'search-items'}>
								<div className="field">
									<input ref="search" type="search" id="search" placeholder={ placeholder || 'search' }/>
								</div>
								<div className="icon" onClick={ this.onToggle.bind(this) }>
									<span className="fa fa-search"/>
								</div>
							</div>
						</div> :
					<input ref="search" type="search" placeholder={ placeholder || 'search' }/>

				}
			</form>
		);
	}
}
