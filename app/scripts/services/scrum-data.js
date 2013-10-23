'use strict';

angular.module('devStatusApp')
    .factory('ScrumData', function($resource) {
        return $resource('clients/:clientId', {
            clientId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    });
