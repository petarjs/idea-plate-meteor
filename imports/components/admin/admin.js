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
          // ugly hack - because Meteor.user is not available immediately
          setTimeout(() => {
            let user = Meteor.user();
            if (user && user.isAdmin) {
              return $q.resolve();
            } else {
              return $q.reject('ADMIN_REQUIRED');
            }
          }, 100)
        }
      }
    });
};