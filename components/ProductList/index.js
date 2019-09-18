import React from 'react';
import './product-list.scss';

const ProductList = props => {
    const { items } = props;
    return (
        <React.Fragment>

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