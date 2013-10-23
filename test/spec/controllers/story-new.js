'use strict';

describe('Controller: StoryNewCtrl', function () {

  // load the controller's module
  beforeEach(module('devStatusApp'));

  var StoryNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryNewCtrl = $controller('StoryNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
