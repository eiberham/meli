import React from 'react';
import './styles.scss';
import Search from '../Search';
import Logo from '../Logo';

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-content">
                    <Logo />
                    <Search />
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;