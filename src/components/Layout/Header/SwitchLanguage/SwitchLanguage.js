import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setLanguage, fetchLanguage } from "../../../../actions/actionsLayout";

import { connect } from 'react-redux';

@connect(state => ({
    language: state.events.language
}))

class SwitchLanguage extends Component {
    static propTypes = {
        href: PropTypes.string,
        icon: PropTypes.string,
        dispatch: PropTypes.func,
        active: PropTypes.string
    };
    constructor(props) {
        super(props);
        this.state = {
            lang: props.language || 'es'
        }
    }

    componentDidMount() {
        this.refs[this.state.lang].classList.add('active');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.lang !== nextState.lang) {
            this.refs[nextState.lang].classList.add('active');
            this.refs[this.state.lang].classList.remove('active');
        }
    }

    render() {
        return(
            <div className="header-switch-lang">
                <div className="switch-lang-content">
                    <span className="es" onClick={this.setLang.bind(this,'es')} ref="es">ES</span>&nbsp;
                    <span className="en" onClick={this.setLang.bind(this,'en')} ref="en">EN</span>
                </div>
            </div>
        );
    }

    setLang(lang) {
        const { dispatch } = this.props;
        dispatch(setLanguage(lang));
        /*dispatch(fetchLanguage({
            lang
        }));
        */
        localStorage.setItem('lang', lang);
        this.setState({
            lang
        });
    }
}
export default SwitchLanguage;
