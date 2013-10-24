'use strict';

describe('Service: notification', function () {

  // load the service's module
  beforeEach(module('expressTestApp'));

  // instantiate service
  var notification;
  beforeEach(inject(function (_notification_) {
    notification = _notification_;
  }));

  it('should do something', function () {
    expect(!!notification).toBe(true);
  });

});
