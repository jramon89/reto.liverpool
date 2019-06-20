import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from '../../../Common/Popover/Popover';

class HeaderProfile extends Component {
	static propTypes = {
		children: PropTypes.element
	}
	render() {
		const { children } = this.props;

		const hoverElement = (
			<div>Hover</div>
		);

		const hoverContent = (
			<div className="user-profile">
				<div className="user-profile-avatar">
					<figure>
					</figure>
				</div>
				<span className="fa fa-caret-down user-caret" />
			</div>
		);

		return(

			<div className="header-user-profile">
				<Popover 
					hoverElement={hoverContent}
					whiteSpace={true}>
					<div className="profile-items">
						<ul>
							<li><a href="#"><span className="fa fa-sign-in"></span> Sign in</a></li>
							<li><a href="#"><span className="fa fa-cogs"></span> Settings</a></li>
						</ul>
					</div>
				</Popover>
			</div>				
		);
	}
}
export default HeaderProfile;
