import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'

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
                <div className="item-detail__summary">
                    <span className="item-detail__summary-condition">
                        {item.condition === 'new' ? (
                            `Nuevo - ${item.sold_quantity} vendidos`
                        ) : (
                            `Usado - ${item.sold_quantity} vendidos`
                        )}
                    </span>
                    <span className="item-detail__summary-title">{item.title}</span>
                    <span className="item-detail__summary-amount">
                        $ {(parseInt(item.price.amount)).toLocaleString()}
                    </span>
                    <span className="item-detail__summary-decimals">
                        {item.price.decimals}
                    </span>

                    <Button fluid color="blue">Comprar</Button>
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