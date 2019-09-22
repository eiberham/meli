import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ProductDetail = props => {
    return (
        <React.Fragment>
            <div className="item-detail">
                <div className="item-detail__image"></div>
                <div className="item-detail__description"></div>
                <div className="item-detail__price"></div>
            </div>
        </React.Fragment>
    )
}

ProductDetail.propTypes = {
    item: PropTypes.shape({

    }).isRequired
}

export default ProductDetail;