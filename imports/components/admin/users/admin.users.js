import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { AdminUsersController } from './admin.users.controller';
 
import './admin.users.html';
 
const name = 'admin.users';
 
export default angular.module(name, [
  angularMeteor
]).component('adminUsers', {
  templateUrl: `imports/components/admin/users/${name}.html`,
  controller: AdminUsersController,  
  controllerAs: 'adminUsers'
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('admin.users', {
      url: '/users',
      template: '<admin-users></admin-users>'
    });
}