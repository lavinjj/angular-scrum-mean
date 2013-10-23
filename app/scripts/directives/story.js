'use strict';

angular.module('devStatusApp')
    .directive('story', function () {
        return {
            restrict: 'E',
            scope: {
                storyId: '=id',
                tasks: '=',
                title: '='
            },
            templateUrl: 'views/story-directive-partial.html',
            link: function (scope, element, attrs) {

            }
        };
    });
