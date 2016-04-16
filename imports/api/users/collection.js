export const Users = Meteor.users;

Meteor.users.helpers({
  email() {
    console.log(this.emails[0].address);
    return this.emails.length ? this.emails[0].address : '';
  }
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