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

  follow(user) {
    Meteor.call('user:follow', {
      user: user
    }, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('User followed');
    })
  }

  unfollow(user) {
    Meteor.call('user:unfollow', {
      user: user
    }, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('User unfollowed');
    })
  }

  showFollowButton(user) {
    if(!user || !this.$rootScope.currentUser) {
      return false;
    }

    let isLoggedIn = !!this.$rootScope.currentUser;
    let isCurrentUser = this.$rootScope.currentUser._id === user._id;
    let alreadyFollowed = isLoggedIn && _.isArray(this.$rootScope.currentUser.following) && this.$rootScope.currentUser.following.indexOf(user._id) !== -1;
    return isLoggedIn && !isCurrentUser && !alreadyFollowed;
  }

  showUnfollowButton(user) {
    if(!user || !this.$rootScope.currentUser) {
      return false;
    }

    let isLoggedIn = !!this.$rootScope.currentUser;
    let isCurrentUser = this.$rootScope.currentUser._id === user._id;
    let alreadyFollowed = isLoggedIn && _.isArray(this.$rootScope.currentUser.following) && this.$rootScope.currentUser.following.indexOf(user._id) !== -1;
    return isLoggedIn && !isCurrentUser && alreadyFollowed;
  }

}