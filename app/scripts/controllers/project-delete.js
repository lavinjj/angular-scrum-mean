'use strict';

angular.module('devStatusApp')
    .controller('ProjectDeleteCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.isEdit = false;

        $scope.save = function () {
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function () {
                var start = -1;
                for (var x = 0; x < $scope.client.Projects.length; x++) {
                    if ($scope.client.Projects[x]._id === $routeParams.project) {
                        start = x;
                    }
                }
                if(start >= 0){
                    $scope.client.Projects.splice(start, 1);
                    $scope.client.$update(function(){
                        $location.path('/');
                    })
                }
            });
        }

        $scope.init();
    });