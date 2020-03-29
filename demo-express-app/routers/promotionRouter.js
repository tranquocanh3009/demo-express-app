const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send all the promotions to you`);
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT not supported on /promotions`);
    })
    .all((req, res, next) => {
        res.end(`Delete all the promotions`);
    });

promotionRouter.route('/:promotionId')
    .get((req, res, next) => {
        res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /promotiones/${req.params.promotionId}`);
    })
    .put((req, res, next) => {
        res.end(`Updating the promotion: ${req.params.promotionId}`);
        res.end(`Will update the promotion: ${req.body.name} with details ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting the promotion: ${req.params.promotionId}`);
    })


module.exports = promotionRouter;