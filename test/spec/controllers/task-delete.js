'use strict';

describe('Controller: TaskDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var TaskDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskDeleteCtrl = $controller('TaskDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
