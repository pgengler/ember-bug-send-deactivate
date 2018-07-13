import Controller from '@ember/controller';

export default Controller.extend({
  didSomethingInTheModal: false,
  showModal: false,

  actions: {
    openModal() {
      this.set('showModal', true);
    },

    markThingAsDone() {
      this.setProperties({
        didSomethingInTheModal: true,
        showModal: false
      });
    }
  }
});
