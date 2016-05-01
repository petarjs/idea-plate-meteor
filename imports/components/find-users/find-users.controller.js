import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users';
import _ from 'lodash';

export class FindUsersController {
  constructor($scope, $reactive, $stateParams, $rootScope, Notification) {
    'ngInject';

    this.Notification = Notification;
    this.$rootScope = $rootScope;

    $reactive(this).attach($scope);

    this.q = '';
    this.subscribe('users:search', () => [this.getReactively('q')]);

    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  

  

}