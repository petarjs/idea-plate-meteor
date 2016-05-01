import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { MyIdeasController } from './my-ideas.controller';
 
import './my-ideas.html';
 
const name = 'my-ideas';

export default angular.module(name, [
  angularMeteor
]).component(_.camelCase(name), {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: _.camelCase(name),
  controller: MyIdeasController
}).config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.myIdeas', {
      url: '/ideas/my/:category',
      template: '<my-ideas></my-ideas>',
      params: {
        category: {value: null, squash: true}
      }
    });
};