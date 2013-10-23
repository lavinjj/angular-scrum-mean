'use strict';

angular.module('devStatusApp')
  .controller('ProjectEditCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.project = null;
        $scope.isEdit = true;

        $scope.save = function () {
            $scope.client.$update(function(){
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function () {
                var start = -1;
                for (var x = 0; x < $scope.client.Projects.length; x++) {
                    if ($scope.client.Projects[x]._id === $routeParams.project) {
                        $scope.project = $scope.client.Projects[x];
                    }
                }
            });
        }

        $scope.init();
    });