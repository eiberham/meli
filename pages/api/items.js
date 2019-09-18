import redis from 'redis';
import _ from 'lodash';
import meli from '../../services/meli';

export default (req, res) => {
    const client = redis.createClient();
    if(req.query.q){
        let query = req.query.q;

        client.get(query, async (err, result) => {
            if (result) {
                res.send(result);
            } else {
                try {
                    const {data, data: {results}} = await meli.get(`/sites/MLA/search?q=${query}&offset=1&limit=4`);
                    let items =  _.map(data.results, item => ({
                        ..._.pick(item, ['id', 'title', 'condition']),
                        picture: _.get(item, 'thumbnail'),
                        free_shipping: _.get(item, 'shipping.free_shipping'),
                        price: {
                            currency: _.get(item, 'currency_id'),
                            amount: _.get(item, 'price'),
                            decimals: _.toString(_.split(_.get(item, 'price'), '.')[1])
                        }
                    }));

                    let category = _.chain(_.map(results, 'category_id')).countBy().toPairs().max(_.last).head().value();

                    let result = await meli.get(`/categories/${category}`);
                    let categories = _.map(result.data.path_from_root, (item) => {
                        return item.name
                    });

                    let output = {
                        author: { name: 'Abraham', lastname: 'Cedeno'},
                        items,
                        categories
                    };

                    client.setex(query, 3600, JSON.stringify(output));

                    res.status(200).json(output);
                }catch({response:{data}}){
                    if(data.status === 404){
                        return res.status(404).json({
                            "status": 404,
                            "message": data.message
                        });
                    }
                }
            }
        });

    } else {
        return res.status(400).json({
            "status": 400,
            "message": "Bad request"
        });
    }
}