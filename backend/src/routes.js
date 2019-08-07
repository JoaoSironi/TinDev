const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message : `ola ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
    console.log();

    return res.json(req.body);
});

module.exports = routes;