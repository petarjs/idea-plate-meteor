import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { HomeController } from './home.controller';
 
import './home.html';
import './header.html';
 
const name = 'home';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  controller: HomeController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'header': {
          templateUrl: 'imports/components/home/header.html'
        },
        '': {
          template: '<home></home>'
        }
      }
    });
};