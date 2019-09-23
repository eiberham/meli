import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import items from '../../pages/items';

const ProductItem = ({product, onProductSelect}) => {
    return (
        <React.Fragment>
            <div className="item" onClick={onProductSelect}>
                <div className="item-image">
                    <img src={product.picture} alt={product.title} />
                </div>
                
                <div className="item-description">
                    <div className="item-price">
                        $ {(parseInt(product.price.amount)).toLocaleString()}
                        <span className="item-decimals">{product.price.decimals}</span>
                    </div>
                    <div className="item-title">{product.title}</div>
                </div>

                <div className="item-condition">
                    {product.condition === 'new' ? (
                        <span>Nuevo</span>
                    ) : ( 
                        <span>Usado</span>
                    )}
                </div>
                
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