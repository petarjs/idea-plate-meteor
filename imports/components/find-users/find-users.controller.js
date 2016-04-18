import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users';

export class FindUsersController {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.q = '';
    this.subscribe('users:search', () => [this.getReactively('q')]);

    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  follow(user) {
    Meteor.call('user:follow', {
      user: user
    })
  }

}