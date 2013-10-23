/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Scrum = mongoose.model('Scrum'),
    _ = require('underscore');


/**
 * Find client by id
 */
exports.client = function(req, res, next, id) {
    Scrum.load(id, function(err, client) {
        if (err) return next(err);
        if (!client) return next(new Error('Failed to load client ' + id));
        req.client = client;
        next();
    });
};

/**
 * Create a client
 */
exports.create = function(req, res) {
    var client = new Scrum(req.body);

    client.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                client: client
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Update a client
 */
exports.update = function(req, res) {
    var client = req.client;

    client = _.extend(client, req.body);

    client.save(function(err) {
        res.jsonp(client);
    });
};

/**
 * Delete an client
 */
exports.destroy = function(req, res) {
    var client = req.client;

    client.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Show an client
 */
exports.show = function(req, res) {
    res.jsonp(req.client);
};

/**
 * List of Clients
 */
exports.all = function(req, res) {
    Scrum.find().exec(function(err, clients) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(clients);
        }
    });
};