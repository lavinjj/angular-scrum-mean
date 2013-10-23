'use strict';

angular.module('devStatusApp')
  .controller('ClientNewCtrl', function ($scope, $location, ScrumData) {
        $scope.client = {ClientName: ''};
        $scope.isEdit = false;

        $scope.save = function(){
            var client = new ScrumData($scope.client);

            client.$save(function(){
                $location.path('/');
            });
        }
  });
