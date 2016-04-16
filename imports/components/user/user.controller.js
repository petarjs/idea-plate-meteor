import angularMeteor from 'angular-meteor';

export class UserController {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
    });
  }

  setIsAdmin(user) {
    Meteor.call('user:setIsAdmin', user, user.isAdmin);
  }
}