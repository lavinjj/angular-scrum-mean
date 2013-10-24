'use strict';

angular.module('devStatusApp')
  .factory('Notification', function ($rootScope) {
        'use strict';

        // private notification messages
        var _EDIT_TASK_ = '_EDIT_TASK_';
        var _DELETE_TASK_ = '_DELETE_TASK_';

        // method to publish _ERROR_MESSAGES_UPDATED_ notification
        var editTask = function (id) {
            $rootScope.$broadcast(_EDIT_TASK_, { taskId: id });
        };
        // method to subscribe to _ERROR_MESSAGES_UPDATED_ notification
        var onEditTask = function ($scope, handler) {
            $scope.$on(_EDIT_TASK_, function (event, args) {
                handler(args.taskId);
            });
        };
        // method to publish _ERROR_MESSAGES_UPDATED_ notification
        var deleteTask = function (id) {
            $rootScope.$broadcast(_DELETE_TASK_, { taskId: id });
        };
        // method to subscribe to _ERROR_MESSAGES_UPDATED_ notification
        var onDeleteTask = function ($scope, handler) {
            $scope.$on(_DELETE_TASK_, function (event, args) {
                handler(args.taskId);
            });
        };
        // return only the methods we want to allow public access to
        return {
            editTask: editTask,
            onEditTask: onEditTask,
            deleteTask: deleteTask,
            onDeleteTask: onDeleteTask
        };
    });
