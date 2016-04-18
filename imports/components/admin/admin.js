import angular from 'angular';
import angularMeteor from 'angular-meteor';

const name = 'admin';

export default angular
  .module(name, [
    angularMeteor
  ])
  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('admin', {
      views: {
        'header': {
          template: '<header-small></header-small>'
        },
        '': {
          abstract: true,
          url: '/admin',
          template: '<div ui-view=""></div>'
        }
      },
      resolve: {
        currentUser($q) {
          if (!Meteor.userId() || !Meteor.user().isAdmin) {
            return $q.reject('ADMIN_REQUIRED');
          } else {
            return $q.resolve();
          }
        }
      }
    });
};