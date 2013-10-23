var async = require('async');

module.exports = function(app) {
    //Client Routes
    var clients = require('../api/scrum');
    app.get('/clients', clients.all);
    app.post('/clients', clients.create);
    app.get('/clients/:clientId', clients.show);
    app.put('/clients/:clientId', clients.update);
    app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
    app.param('clientId', clients.client);
};