'use strict';

angular.module('devStatusApp')
  .controller('ClientEditCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.isEdit = true;

        $scope.save = function(){
            $scope.client.$update(function(){
                $location.path('/');
            });
        };

        $scope.init = function(){
            $scope.client = ScrumData.get({clientId: $routeParams.id});
        }

        $scope.init();
  });
