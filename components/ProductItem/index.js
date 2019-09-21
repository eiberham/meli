import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ProductItem = ({product, onProductSelect}) => {
    return (
        <React.Fragment>
            <div className="item" onClick={onProductSelect}>
                <div className="item-image">
                    <img src={product.picture} alt={product.title} />
                </div>
                <div className="item-title">{product.title}</div>
                <div className="item-price">{product.price.amount}</div>
            </div>
        </React.Fragment>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        condition: PropTypes.string,
        free_shipping: PropTypes.bool,
        picture: PropTypes.string,
        price: PropTypes.shape({
            amount: PropTypes.number,
            currency: PropTypes.string,
            decimals: PropTypes.string
        })
    }).isRequired,
    onProductSelect: PropTypes.func
}

export default ProductItem;