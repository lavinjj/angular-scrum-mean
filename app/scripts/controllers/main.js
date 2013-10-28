'use strict';

angular.module('devStatusApp')
  .controller('MainCtrl', function ($scope, $location, $filter, ScrumData, Notification) {
        $scope.clientCreationString = '';
        $scope.projectCreationString = '';
        $scope.storyCreationString = '';
        $scope.activeClients = [];
        $scope.inactiveClients = [];
        $scope.clients = [];
        $scope.editMode = false;

        $scope.addClient = function(){
            var client = new ScrumData({ClientName: $scope.clientCreationString});

            client.$save(function(){
                $scope.clientCreationString = '';
                $scope.clients = ScrumData.query();
            });
        };

        $scope.addProject = function(id){
            var client = ScrumData.get({clientId: id}, function(){
                if(!client.Projects){
                    client.Projects = [];
                }
                client.Projects.push({ProjectName: $scope.projectCreationString, Stories: []});
                client.$update(function(){
                    $scope.projectCreationString = '';
                    $scope.clients = ScrumData.query();
                })
            });
        };

        $scope.deleteProject = function(id, index){
            var client = ScrumData.get({clientId: id}, function(){
                client.Projects.splice(index, 1);
                client.$update(function(){
                    $scope.clients = ScrumData.query();
                })
            });
        }

        $scope.addStory = function(id, index){
            var client = ScrumData.get({clientId: id}, function(){
                var project = client.Projects[index];
                project.Stories.push({Title: $scope.storyCreationString, Tasks: []});
                client.$update(function(){
                    $scope.storyCreationString = '';
                    $scope.clients = ScrumData.query();
                })
            });
        };

        $scope.saveAll = function(){
            angular.forEach($scope.clients, function(client){
                client.$update(function(){
                    $scope.init();
                });
            })
        }

        $scope.showTasks = function(project){
            project.showTasks = !project.showTasks;
        };

        $scope.switchEditMode = function(){
            $scope.editMode = !$scope.editMode;
        };

        $scope.onEditTaskHandler = function(id){
            var currentClientId = '';
            var currentProjectId = '';
            var currentStoryId = '';
            angular.forEach($scope.clients, function(client){
                currentClientId = client._id;
                angular.forEach(client.Projects, function(project){
                    currentProjectId = project._id;
                    angular.forEach(project.Stories, function(story){
                        currentStoryId = story._id;
                        angular.forEach(story.Tasks, function(task){
                            if (task._id === id){
                                $location.path('/edit-task/'+ currentClientId + '/' + currentProjectId + '/' + currentStoryId + '/' + id);
                            }
                        })
                    })
                })
            })
        };

        Notification.onEditTask($scope, $scope.onEditTaskHandler);

        $scope.onDeleteTaskHandler = function(id){
            var currentClientId = '';
            var currentProjectId = '';
            var currentStoryId = '';
            angular.forEach($scope.clients, function(client){
                currentClientId = client._id;
                angular.forEach(client.Projects, function(project){
                    currentProjectId = project._id;
                    angular.forEach(project.Stories, function(story){
                        currentStoryId = story._id;
                        angular.forEach(story.Tasks, function(task){
                            if (task._id === id){
                                $location.path('/delete-task/'+ currentClientId + '/' + currentProjectId + '/' + currentStoryId + '/' + id);
                            }
                        })
                    })
                })
            })
        };

        Notification.onDeleteTask($scope, $scope.onDeleteTaskHandler);

        $scope.filterClients = function() {
            function filterActiveClients(clients) {
                return $filter('filter')(clients, function(client) {
                    var matchesFilter = client.Projects.length > 0;
                    return matchesFilter;
                });
            }
            function filterInactiveClients(clients) {
                return $filter('filter')(clients, function(client) {
                    var matchesFilter = client.Projects.length < 1;
                    return matchesFilter;
                });
            }
            $scope.activeClients = filterActiveClients($scope.clients);
            $scope.inactiveClients = filterInactiveClients($scope.clients);
        };

        $scope.init = function(){
            $scope.clients = ScrumData.query(function(){
                $scope.filterClients();
            });
        };

        $scope.init();
    });
