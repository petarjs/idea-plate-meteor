import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { LikedController } from './liked.controller';

import './liked.html';

const name = 'liked';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name,
  controller: LikedController
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.liked', {
      url: '/liked',
      template: '<liked></liked>'
    });
};