import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from '../../../Common/Modal/Modal';
import Popover from '../../../Common/Popover/Popover';

class ModalLogin extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        location: PropTypes.object,
    };

    render() {
        const {
         location: {
             pathname
         }
        } = this.props;

        return (
            <div>
                <div className="header-sign-in">
                    <a href="#">
                        <span className="fas fa-user"></span> Login
                    </a>
                </div>
                {/*
                <Modal title={(<p>Login</p>)} isOpen={false}>
                    <div>
                        <form action="">
                            <div>
                                <input type="text" placeholder="User"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                </Modal>
                */}
            </div>
        );
    }
}
export default ModalLogin;

