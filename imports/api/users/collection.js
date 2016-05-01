export const Users = Meteor.users;

Meteor.users.helpers({
  email() {
    return this.emails.length ? this.emails[0].address : '';
  },
  isFollowing(user) {
    return _.isArray(this.following) && this.following.indexOf(user._id) !== -1;
  },
});

Users.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

Users.allow({
  insert(userId, user) {
    return userId && user._id === userId || Meteor.user().isAdmin;
  },
  update(userId, user, fields, modifier) {
    return userId && user._id === userId || Meteor.user().isAdmin;
  },
  remove(userId, user) {
    return userId && Meteor.user().isAdmin;
  }
});