import React from 'react';
import './styles.scss';
import Search from '../Search';

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <Search />
            </header>
        </React.Fragment>
    );
}

export default Header;