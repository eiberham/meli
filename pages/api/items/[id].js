import redis from 'redis';
import axios from 'axios';
import _ from 'lodash';
import meli from '../../../services/meli';

export default (req, res) => {
    const client = redis.createClient();
    let id = req.query.id;

    client.get(id, async (err, result) => {
        if (result) {
            res.send(result);
        } else {
            axios.all([
                meli.get(`/items/${id}`),
                meli.get(`/items/${id}/description`)
            ])
                .then(axios.spread(async (first, second) => {
                    let response = {...first.data, ...second.data};

                    let data = {
                        ..._.pick(response, ['id', 'title', 'condition', 'sold_quantity']),
                        picture: _.get(response, 'thumbnail'),
                        free_shipping: _.get(response, 'shipping.free_shipping'),
                        description: _.get(response, 'plain_text'),
                        price: {
                            currency: _.get(response, 'currency_id'),
                            amount: _.get(response, 'price'),
                            decimals: _.toString(_.split(_.get(response, 'price'), '.')[1])
                        }
                    };

                    const {data:{path_from_root}} = await meli.get(`/categories/${response.category_id}`);
                    let categories = _.map(path_from_root, item => {
                        return item.name
                    });

                    let output = {
                        author: { name: 'Abraham', lastname: 'Cedeno'},
                        item: data,
                        categories
                    };

                    client.setex(id, 3600, JSON.stringify(output));

                    res.status(200).json(output);
                }))
                .catch(({response:{data}}) => {
                    if(data.status === 404){
                        return res.status(404).json({
                            "status": 404,
                            "message": data.message
                        });
                    }
                });
        }
    });
}