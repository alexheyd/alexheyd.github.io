import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('resume');

  this.route('portfolio', function() {
    this.route('view', { path: 'view/:id' });
  });

  this.route('code-samples', function() {
    this.route('view', { path: 'view/:id' });
  });

  this.route('projects', function() {
    this.route('view', { path: 'view/:id' });
  });

  this.route('contact');
});

export default Router;
