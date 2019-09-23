import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ProductDetail = props => {
    const { item } = props;
    return (
        <React.Fragment>
            <div className="item-detail">
                <div className="item-detail__image">
                    <figure>
                        <img src={item.picture} alt={item.title} />
                    </figure>
                </div>
                <div className="item-detail__description">
                    <h1>Descripción del producto</h1>
                    <p>{item.description}</p>
                </div>
                <div className="item-detail__price">
                    <span>$ {item.price.amount}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

ProductDetail.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.string,
        condition: PropTypes.string,
        description: PropTypes.string,
        free_shipping: PropTypes.bool,
        picture: PropTypes.string,
        sold_quantity: PropTypes.number,
        price: PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number,
            decimals: PropTypes.string
        })
    }).isRequired
}

export default ProductDetail;