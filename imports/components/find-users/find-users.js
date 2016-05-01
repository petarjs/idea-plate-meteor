import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { FindUsersController } from './find-users.controller';
import './find-users.html';

const name = 'find-users';

export default angular.module(name, [
  angularMeteor
]).component('findUsers', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: 'findUsers',
  controller: FindUsersController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.find-users', {
      url: '/users/find',
      template: '<find-users></find-users>',
    });
};