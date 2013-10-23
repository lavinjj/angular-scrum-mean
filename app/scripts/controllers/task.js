'use strict';

angular.module('devStatusApp')
  .controller('TaskCtrl', function ($scope, $filter, $location, ScrumData) {
        $scope.tasks = $scope.$parent.tasks;
        //need to redo filters whenever tasks changes
        $scope.$watch('tasks', function (newValue, oldValue) {
            setFilteredTaskViews();
        }, true);
        $scope.statuses = devstatusApp.TaskStatus;
        $scope.titles = devstatusApp.Titles;
        $scope.taskTitle = '';
        $scope.taskPoints = '';
        $scope.taskAssignedTo = '';
        $scope.taskOrder = '';
        setFilteredTaskViews();

        function setFilteredTaskViews() {
            var sortedTasks = _.sortBy($scope.tasks, 'Order');
            function filterByStatus(statusFilter) {
                return $filter('filter')(sortedTasks, function(element) {
                    var matchesFilter = element.Status === statusFilter;
                    return matchesFilter;
                });
            }
            $scope.todoTasks = filterByStatus(devstatusApp.TaskStatus.todo);
            $scope.inProgressTasks = filterByStatus(devstatusApp.TaskStatus.inProgress);
            $scope.impededTasks = filterByStatus(devstatusApp.TaskStatus.impeded);
            $scope.testingTasks = filterByStatus(devstatusApp.TaskStatus.testing);
            $scope.codeReviewTasks = filterByStatus(devstatusApp.TaskStatus.codeReview);
            $scope.signOffTasks = filterByStatus(devstatusApp.TaskStatus.signOff);
            $scope.deploymentTasks = filterByStatus(devstatusApp.TaskStatus.deployment);
            $scope.doneTasks = filterByStatus(devstatusApp.TaskStatus.done);
        }
        $scope.addTask = function (taskCreationString) {
            var currentClient = null;
            var clients = ScrumData.query(function(){
                angular.forEach(clients, function(client){
                    currentClient = client;
                    angular.forEach(client.Projects, function(project){
                           angular.forEach(project.Stories, function(story){
                               if(story._id === $scope.$parent.storyId){
                                   if(!story.Tasks){
                                       story.Tasks = [];
                                   }
                                   story.Tasks.push({
                                       Title: $scope.taskTitle,
                                       Points: $scope.taskPoints,
                                       AssignedTo: $scope.taskAssignedTo,
                                       Order: $scope.taskOrder || 0,
                                       Status: 'todo'
                                   })
                                   currentClient.$update(function(){
                                       $location.path('#/refresh');
                                   })
                               }
                           })
                    })
                });
            });

        };
        function resetForm () {
            $scope.taskCreationString = '';
        };
    });