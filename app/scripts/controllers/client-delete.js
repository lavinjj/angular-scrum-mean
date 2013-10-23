'use strict';

angular.module('devStatusApp')
  .controller('ClientDeleteCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.isEdit = false;

        $scope.init = function(){
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function(){
                $scope.client.$remove(function(){
                    $location.path('/');
                })
            });
        };

        $scope.init();
  });
