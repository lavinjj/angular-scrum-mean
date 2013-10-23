'use strict';

angular.module('devStatusApp')
  .controller('StoryDeleteCtrl', function ($scope, $routeParams, $location, ScrumData) {
        $scope.client = null;
        $scope.isEdit = false;

        $scope.save = function () {
        };

        $scope.init = function () {
            $scope.client = ScrumData.get({clientId: $routeParams.id}, function () {
                var start = -1;
                for (var x = 0; x < $scope.client.Projects.length; x++) {
                    if ($scope.client.Projects[x]._id === $routeParams.project) {
                        for(var y = 0; y < $scope.client.Projects[x].Stories.length; y++){
                            if($scope.client.Projects[x].Stories[y]._id === $routeParams.story){
                                start = y;
                            }
                        }
                    }
                    if(start >= 0){
                        $scope.client.Projects[x].Stories.splice(start, 1);
                        $scope.client.$update(function(){
                            $location.path('/');
                        })
                    }
                }
            });
        }

        $scope.init();
    });