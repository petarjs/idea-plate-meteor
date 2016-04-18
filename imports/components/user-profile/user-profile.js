import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { UserProfileController } from './user-profile.controller';
import './user-profile.html';

const name = 'user-profile';

export default angular.module(name, [
  angularMeteor
]).component('userProfile', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: 'userProfile',
  controller: UserProfileController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.userProfile', {
      url: '/user/:user',
      template: '<user-profile></user-profile>',
    });
};