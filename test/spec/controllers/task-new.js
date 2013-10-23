'use strict';

describe('Controller: TaskNewCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var TaskNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskNewCtrl = $controller('TaskNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
