import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';
import { selectChoose } from 'ember-power-select/test-support/helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | thing', function(hooks) {
  setupApplicationTest(hooks);

  test('testing the thing', async function(assert) {
    await visit('/');
    await click('button[type=button]');
    await selectChoose('.select-container', '.ember-power-select-option', 0);

    assert.dom('.succeeded').exists();
  });
});
