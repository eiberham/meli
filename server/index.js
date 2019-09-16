const express = require('express');
const next = require('next');
const port = process.env.port || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then( () => {
    const server = express();
    const router = express.Router();

    router.get('/', (req, res, next) => {
        if(req.query.q){
            let query = req.query.q;
            console.log("calling /items");
            return app.render(req, res, `/items?q=${query}`);
        }
        
        res.send('Calling the / route');
        next();
    });

    router.get('/:id', (req, res) => {
        return app.render(req, res, '/items', { id: req.params.id });
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.use('/items', router);

    server.listen(port, err => {
        if(err) throw err;
        console.log(`Listening on port ${port}`);
    });
});