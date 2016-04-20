import angularMeteor from 'angular-meteor';

export class AdminUsersController {
  constructor($scope, $reactive, $rootScope, Iconate) {
    'ngInject';

    this.Iconate = Iconate
    $reactive(this).attach($scope);

    this.subscribe('admin:users');

    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
  }

  cc() {
    this.Iconate.morph('arrow-right', 'arrow-left')
  }
}