import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users';
import { Ideas } from '../../api/ideas';
import { Feed } from '../../api/feed';

export class UserProfileController {
  constructor($scope, $reactive, $stateParams, $scope, TrustHtml) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.$scope = $scope;
    this.TrustHtml = TrustHtml;
    this.user = Users.findOne({ _id: $stateParams.user });

    $reactive(this).attach($scope);

    this.subscribe('users:profile', () => [ this.$stateParams.user ]);
    this.subscribe('ideas:byUser', () => [ this.$stateParams.user ]);
    this.subscribe('feed', () => [ this.$stateParams.user ]);

    this.helpers({
      user() {
        return Users.findOne({ _id: $stateParams.user });
      },
      following() {
        return Users.find({ _id: { $in: (this.getReactively('user') || {}).following || [] } })
      },
      ideas() {
        return Ideas.find({});
      },
      feed() {
        return Feed.find({})
      }
    })
  }

  trustAsHtml(string) {
    return this.TrustHtml.trustAsHtml(string, this.$scope);
  }
}