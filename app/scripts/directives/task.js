'use strict';

angular.module('devStatusApp')
    .directive('taskStatus', function () {
        return {
            restrict: 'E',
            scope: {
                tasks: '=',
                status: '=',
                title: '='
            },
            templateUrl: 'views/task-directive-partial.html',
            link: function (scope, element, attrs) {
                scope.storyId = scope.$parent.storyId;
                var updateOrder = function() {
                    angular.forEach($('task-status task'), function(element) {
                        var task = _.findWhere(scope.$parent.tasks, {_id: parseInt(element.id)});
                        if (task) {
                            task.Order = $(element).closest('li').index();
                        }
                    });
                };
                var updateTask = function (event, ui) {
                    var id = $('task', ui.item).attr('id');
                    var task = _.findWhere(scope.$parent.tasks, {_id: id});
                    task.Status = scope.status;
                    updateOrder();
                    //necessary because only child scopes are checked by default
                    scope.$parent.$digest();
                };
                $('.thumbnails', element).sortable({
                    placeholder: 'ui-state-highlight',
                    opacity: 0.5,
                    forceHelperSize: true,
                    forcePlaceholderSize: true,
                    connectWith: '.thumbnails',
                    dropOnEmpty: true,
                    tolerance: 'pointer',
                    receive: updateTask,//for receiving from a different list
                    change: updateOrder//for receiving from same list
                });
            }
        };
    });
