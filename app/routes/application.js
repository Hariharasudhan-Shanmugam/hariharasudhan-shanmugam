import Route from '@ember/routing/route';

export default Route.extend({
  setupController(){
    this._super(...arguments);
    
  },

  redirect(){
  //  this.transitionTo('landing-page');
  },
});
