import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    var url = 'https://io-builtwithember-addons-data.s3.amazonaws.com/addons.json';
    return ajax(url).then(function(result) {
      return result.sortBy('time.modified').reverse();
    });
  },

  setupController: function (controller, model) {
    this._super.apply(this, arguments);
    this.controllerFor('application').set('packageCount', model.get('length'));
  }
});
