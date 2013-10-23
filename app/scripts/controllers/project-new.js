'use strict';

angular.module('devStatusApp')
  .controller('ProjectNewCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.project = {ProjectName: '', Stories: []};
        $scope.isEdit = false;

        $scope.save = function () {
            if(!$scope.client.Projects){
                $scope.client.Projects = [];
            }
            $scope.client.Projects.push($scope.project);
            $scope.client.$update(function(){
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id});
        }

        $scope.init();
    });