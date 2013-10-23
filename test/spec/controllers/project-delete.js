'use strict';

describe('Controller: ProjectDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var ProjectDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectDeleteCtrl = $controller('ProjectDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
