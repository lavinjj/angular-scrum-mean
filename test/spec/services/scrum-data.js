'use strict';

describe('Service: scrumData', function () {

  // load the service's module
  beforeEach(module('devStatusApp'));

  // instantiate service
  var scrumData;
  beforeEach(inject(function (_scrumData_) {
    scrumData = _scrumData_;
  }));

  it('should do something', function () {
    expect(!!scrumData).toBe(true);
  });

});
