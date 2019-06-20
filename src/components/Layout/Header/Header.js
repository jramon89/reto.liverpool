import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderAngle from './Angle/Angle';


class Header extends Component {
	static propTypes = {
		items: PropTypes.array,
		hidden: PropTypes.string,
        onSubmit: PropTypes.func,
		location: PropTypes.object,
		dispatch: PropTypes.func,
	};
	constructor(props) {
		super(props);
		this.onSubmitSearch = this.onSubmitSearch.bind(this);
	}
    onSubmitSearch(value) {
        const { onSubmit } = this.props;
        onSubmit(value);
    }
	render() {
		const {
			location:{
				pathname
			},
			hidden,
			dispatch
		} = this.props;
		return(
			<div className="header-content">

				{
                    hidden ? <HeaderAngle/> : ''
				}
			</div>
		);
	}
}
export default Header;