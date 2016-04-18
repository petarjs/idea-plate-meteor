import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users';

export class UserProfileController {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.user = Users.findOne({ _id: $stateParams.user });

    $reactive(this).attach($scope);

    this.subscribe('users:profile', () => [ this.$stateParams.user ]);

    this.helpers({
      user() {
        return Users.findOne({ _id: $stateParams.user });
      },
      following() {
        return Users.find({ _id: { $in: this.getReactively('user').following || [] } })
      }
    })
  }
}