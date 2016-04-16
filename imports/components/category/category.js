import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './category.html';
import { CategoryController } from './category.controller';

const name = 'category';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    category: '<'
  },
  controller: CategoryController
});