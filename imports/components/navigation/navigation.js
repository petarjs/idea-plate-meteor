import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { NavigationController } from './navigation.controller';
import './navigation.html';
 
const name = 'navigation';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: NavigationController,
  controllerAs: name
});