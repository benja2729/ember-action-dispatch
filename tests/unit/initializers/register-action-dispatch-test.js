import Ember from 'ember';
import RegisterActionDispatchInitializer from 'dummy/initializers/register-action-dispatch';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | register action dispatch', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RegisterActionDispatchInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
