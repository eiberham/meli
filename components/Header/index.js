import React from 'react';
import './styles.scss';

const Header = ({children}) => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-content">
                    { children }
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;