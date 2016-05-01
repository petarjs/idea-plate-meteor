import angularMeteor from 'angular-meteor';

export class UserController {
  constructor($scope, $reactive, Notification, $rootScope) {
    'ngInject';

    this.Notification = Notification;
    this.$rootScope = $rootScope;

    $reactive(this).attach($scope);

    this.helpers({
    });
  }

  setIsAdmin(user) {
    Meteor.call('user:setIsAdmin', user, user.isAdmin, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('User ' + (!user.isAdmin ? 'un' : '') + 'set as Admin');
    });
  }

  follow() {
    Meteor.call('user:follow', {
      user: this.user
    }, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('User followed');
    })
  }

  unfollow() {
    Meteor.call('user:unfollow', {
      user: this.user
    }, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('User unfollowed');
    })
  }

  showFollowButton() {
    if(!this.user || !this.$rootScope.currentUser) {
      return false;
    }

    let isLoggedIn = !!this.$rootScope.currentUser;
    let isCurrentUser = this.$rootScope.currentUser._id === this.user._id;
    let alreadyFollowed = isLoggedIn && _.isArray(this.$rootScope.currentUser.following) && this.$rootScope.currentUser.following.indexOf(this.user._id) !== -1;
    return isLoggedIn && !isCurrentUser && !alreadyFollowed;
  }

  showUnfollowButton() {
    if(!this.user || !this.$rootScope.currentUser) {
      return false;
    }

    let isLoggedIn = !!this.$rootScope.currentUser;
    let isCurrentUser = this.$rootScope.currentUser._id === this.user._id;
    let alreadyFollowed = isLoggedIn && _.isArray(this.$rootScope.currentUser.following) && this.$rootScope.currentUser.following.indexOf(this.user._id) !== -1;
    return isLoggedIn && !isCurrentUser && alreadyFollowed;
  }
}