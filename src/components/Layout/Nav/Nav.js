import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../../Common/Search/Search';

export default
class Menu extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        items: PropTypes.object,
        value: PropTypes.string,
        dispatch: PropTypes.func,
        isScrolling: PropTypes.bool,
        posts: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            topHeightNav: null,
        };
        this.openMenu = this.openMenu.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
    }

    openMenu() {
        const { isOpenMenu } = this.state;
        this.setState({
            isOpenMenu: !isOpenMenu,
            topHeightNav: this.ofHeight.offsetHeight,
            hideItemsMenu: false,
        });
    }
    onSubmitSearch(value) {
        const { onSubmit } = this.props;
        onSubmit(value);
        this.setState({
            isOpenMenu: false
        });
    }
    render() {
        const {
            items,
            value,
            location,
            isScrolling
        } = this.props;


        const isOpenMenu = this.state.isOpenMenu ? 'active' : '';

        const menuItems = items['menu_a'].map((value, index)=>{

            let type = index === 0 ? (
                <div className="">
                    <Link className="logo" to="/" onClick={() => this.setState({isOpenMenu: false})}>Product inventory</Link>
                    <span className={`m-bar ${isOpenMenu}`} onClick={this.openMenu}></span>
                </div>

            ) : (
                <Link
                    to={!value.actionable ? `${value.link}` : `#${value.link}`}>
                    { value.title }
                </Link>
            );
            return(
                value.active ?
                    <li key={index} className={`item ${isOpenMenu}`} id={`ìtem_${index}`}>
                        {type}
                    </li> : null
            );

        });
        return(
            <div className={`items-menu-content ${isOpenMenu}`} style={{
                height: isOpenMenu ? this.state.topHeightNav : '',
            }}>
                <ul className={`items-menu`}  ref={(e) => this.ofHeight = e}>
                    {menuItems}
                </ul>
            </div>
        );
    }
}
