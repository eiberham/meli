import React from 'react';
import './product-list.scss';
import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';

const ProductList = props => {
    const { items, onItemSelect } = props;
    return (
        <React.Fragment>
            {items && items.map((item, index) => (
                <ProductItem 
                    key={index} 
                    product={item} 
                    onProductSelect={onItemSelect} 
                />
            ))}
        </React.Fragment>
    );
};

ProductList.propTypes = {
    items: PropTypes.arrayOf(
                PropTypes.shape({
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

                }).isRequired
            ).isRequired
}

export default ProductList;