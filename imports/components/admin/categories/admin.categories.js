import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { AdminCategoriesController } from './admin.categories.controller';
 
import './admin.categories.html';
 
const name = 'admin.categories';
 
export default angular.module(name, [
  angularMeteor
]).component('adminCategories', {
  templateUrl: `imports/components/admin/categories/${name}.html`,
  controller: AdminCategoriesController,  
  controllerAs: 'adminCategories'
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('admin.categories', {
      url: '/categories',
      template: '<admin-categories></admin-categories>'
    });
}