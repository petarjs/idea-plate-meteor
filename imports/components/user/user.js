import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './user.html';
import { UserController } from './user.controller';

const name = 'user';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    user: '<'
  },
  controller: UserController
});