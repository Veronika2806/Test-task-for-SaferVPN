import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';

// @STYLES
import './Header.scss';

class Header extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <div className="header-left">
                    <a href="http://localhost:3000/">
                        <img src={"images/logo.png"} alt="test"/>
                        <span>perimeter 81</span>
                    </a>
                </div>
                    <div>
                        {children}
                    </div>
                <div className="header-right">
                    <a href="http://localhost:3000/">log in</a>
                    <ButtonComponent title="request demo" className="request-demo-btn"/>
                    <ButtonComponent title="start now" className="start-now-btn"/>
                </div>
            </div>
        );
    }
}

export default Header;

