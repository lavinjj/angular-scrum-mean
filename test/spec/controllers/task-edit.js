'use strict';

describe('Controller: TaskEditCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var TaskEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskEditCtrl = $controller('TaskEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
