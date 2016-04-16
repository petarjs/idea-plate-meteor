import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { CreateController } from './create.controller';
 
import './create.html';
 
const name = 'create';
 
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  controller: CreateController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.create', {
      url: '/create',
      template: '<create></create>'
    });
};