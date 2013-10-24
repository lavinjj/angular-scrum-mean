'use strict';

angular.module('devStatusApp')
    .directive('story', function () {
        return {
            restrict: 'E',
            scope: {
                storyId: '=id',
                tasks: '=',
                title: '=',
                projectId: '=project'
            },
            templateUrl: 'views/story-directive-partial.html',
            link: function (scope, element, attrs) {

            }
        };
    });
