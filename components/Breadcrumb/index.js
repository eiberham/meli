import React from 'react';
import { Breadcrumb as Nav } from 'semantic-ui-react';

const Breadcrumb = props => {
    const { links } = props;
    return (
        <Nav>
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
    )
}

export default Breadcrumb;