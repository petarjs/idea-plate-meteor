import angular from 'angular';
import angularMeteor from 'angular-meteor';

const name = 'app';

export default angular
  .module(name, [
    angularMeteor
  ])
  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app', {
      views: {
        'header': {
          template: '<header-small></header-small>'
        },
        '': {
          abstract: true,
          url: '',
          template: '<div ui-view=""></div>'
        }
      }
    });
};