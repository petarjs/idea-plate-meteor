import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './feed.html';
import { FeedController } from './feed.controller';

const name = 'feed';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    feed: '<'
  },
  controller: FeedController
});