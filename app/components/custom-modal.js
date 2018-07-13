import Component from '@ember/component';
import { next } from '@ember/runloop';

const THINGS = [ 'one fish', 'two fish', 'red fish', 'blue fish' ];

export default Component.extend({
  tagName: '',

  things: THINGS,

  didInsertElement() {
    this._super(...arguments);
    next(() => document.querySelector('input[type=search]').focus());
  }
});
