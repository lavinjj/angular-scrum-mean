'use strict';

describe('Directive: task', function () {

  // load the directive's module
  beforeEach(module('devStatusApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task></task>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the task directive');
  }));
});
