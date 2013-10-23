'use strict';

angular.module('devStatusApp')
  .controller('TaskNewCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.project = null;
        $scope.story = null;
        $scope.task = {Title: '', Points: 2, AssignedTo: 'un-assigned', Order: 0, Status: 'todo'};
        $scope.isEdit = true;

        $scope.save = function () {
            if (!$scope.story.Tasks) {
                $scope.story.Tasks = [];
            }
            $scope.story.Tasks.push($scope.task);

            $scope.client.$update(function () {
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function () {
                for (var x = 0; x < $scope.client.Projects.length; x++) {
                    if ($scope.client.Projects[x]._id === $routeParams.project) {
                        $scope.project = $scope.client.Projects[x];
                        for (var y = 0; y < $scope.project.Stories.length; y++) {
                            if ($scope.project.Stories[y]._id === $routeParams.story) {
                                $scope.story = $scope.project.Stories[y];
                            }
                        }
                    }
                }
            });
        }

        $scope.init();
    });