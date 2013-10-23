'use strict';

angular.module('devStatusApp')
    .controller('StoryNewCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.project = null;
        $scope.story = {Title: '', Tasks: []};
        $scope.isEdit = true;

        $scope.save = function () {
            if (!$scope.project.Stories) {
                $scope.project.Stories = [];
            }
            $scope.project.Stories.push($scope.story);

            $scope.client.$update(function () {
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function () {
                for (var x = 0; x < $scope.client.Projects.length; x++) {
                    if ($scope.client.Projects[x]._id === $routeParams.project) {
                        $scope.project = $scope.client.Projects[x];
                    }
                }
            });
        }

        $scope.init();
    });