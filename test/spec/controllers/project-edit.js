'use strict';

describe('Controller: ProjectEditCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var ProjectEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectEditCtrl = $controller('ProjectEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
