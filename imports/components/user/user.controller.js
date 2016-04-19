import angularMeteor from 'angular-meteor';

export class UserController {
  constructor($scope, $reactive, Notification) {
    'ngInject';

    this.Notification = Notification;
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
}