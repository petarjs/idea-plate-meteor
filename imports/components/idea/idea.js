import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { IdeaController } from './idea.controller';
 
import './idea.html';
 
const name = 'idea';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  controller: IdeaController,
  bindings: {
    idea: '<'
  }
});