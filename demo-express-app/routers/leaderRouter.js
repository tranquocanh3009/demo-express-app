const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send all the leaders to you`);
    })
    .post((req, res) => {
        res.end(`Will add the leader: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res) => {
        res.end(`PUT not supported on /leaders`);
    })
    .delete((req, res) => {
        res.end(`Deleting all leaders!`);
    });

leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end(`Will send details of the leader: ${req.params.leaderId} to you`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /leaderes/${req.params.leaderId}`);
    })
    .put((req, res, next) => {
        res.end(`Updating the leader: ${req.params.leaderId}`);
        res.end(`Will update the leader: ${req.body.name} with details ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting the leader: ${req.params.leaderId}`);
    })

module.exports = leaderRouter;