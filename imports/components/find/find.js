import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { FindController } from './find.controller';
 
import './find.html';
 
const name = 'find';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  controller: FindController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.find', {
      url: '/find/:category',
      template: '<find></find>',
      params: {
        category: {value: null, squash: true}
      }
    });
};