import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Breadcrumb as Nav } from 'semantic-ui-react';

const Breadcrumb = props => {
    const { links } = props;
    return (
        <div className="breadcrumb">
            <Nav size="small">
                {links && links.map((link, index) => (
                    <React.Fragment>
                        {index === links.length -1 ? (
                            <Nav.Section active>{ link }</Nav.Section>
                        ) : (
                            <React.Fragment>
                                <Nav.Section link>{ link }</Nav.Section>
                                <Nav.Divider>/</Nav.Divider>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                ))}
            </Nav>
        </div>
    )
}

Breadcrumb.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumb;