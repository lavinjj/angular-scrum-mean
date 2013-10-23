'use strict';

describe('Directive: story', function () {

  // load the directive's module
  beforeEach(module('devStatusApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<story></story>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the story directive');
  }));
});
