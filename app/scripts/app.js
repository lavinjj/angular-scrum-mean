'use strict';

angular.module('devStatusApp', ['ngResource', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/add-client', {
                templateUrl: 'views/client.html',
                controller: 'ClientNewCtrl'
            })
            .when('/edit-client/:id', {
                templateUrl: 'views/client.html',
                controller: 'ClientEditCtrl'
            })
            .when('/delete-client/:id', {
                templateUrl: 'views/client.html',
                controller: 'ClientDeleteCtrl'
            })
            .when('/add-project/:id', {
                templateUrl: 'views/project.html',
                controller: 'ProjectNewCtrl'
            })
            .when('/edit-project/:id/:project', {
                templateUrl: 'views/project.html',
                controller: 'ProjectEditCtrl'
            })
            .when('/delete-project/:id/:project', {
                templateUrl: 'views/project.html',
                controller: 'ProjectDeleteCtrl'
            })
            .when('/add-story/:id/:project', {
                templateUrl: 'views/story.html',
                controller: 'StoryNewCtrl'
            })
            .when('/edit-story/:id/:project/:story', {
                templateUrl: 'views/story.html',
                controller: 'StoryEditCtrl'
            })
            .when('/delete-story/:id/:project/:story', {
                templateUrl: 'views/story.html',
                controller: 'StoryDeleteCtrl'
            })
            .when('/add-task/:id/:project/:story', {
                templateUrl: 'views/task.html',
                controller: 'TaskNewCtrl'
            })
            .when('/edit-task/:id/:project/:story/:task', {
                templateUrl: 'views/task.html',
                controller: 'TaskEditCtrl'
            })
            .when('/delete-task/:id/:project/:story/:task', {
                templateUrl: 'views/task.html',
                controller: 'TaskDeleteCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
