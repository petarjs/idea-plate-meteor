import angularMeteor from 'angular-meteor';

export class AdminUsersController {
  constructor($scope, $reactive, $rootScope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('admin:users');

    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
  }
}