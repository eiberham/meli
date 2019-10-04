import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';


const Loading = props => {
    const { size, show } = props;
    return (
        <Fragment>
            {(show) ? (
                <Segment>
                    <Dimmer active inverted>
                        <Loader size={size}>Loading</Loader>
                    </Dimmer>
                </Segment>
            ) : (
                <Fragment></Fragment>
            )}
        </Fragment>
    )
}

Loading.propTypes = {
    size: PropTypes.string, 
    show: PropTypes.bool.isRequired
}

Loading.defaultProps = {
    size: 'tiny'
}

export default Loading;