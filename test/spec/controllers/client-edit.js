'use strict';

describe('Controller: ClientEditCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var ClientEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientEditCtrl = $controller('ClientEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
