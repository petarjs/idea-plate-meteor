import { Mongo } from 'meteor/mongo';

export const Ideas = new Mongo.Collection('ideas');

Ideas.helpers({
  ideaOwner() {
    return this.owner ? Meteor.users.findOne({ _id: this.owner }) : {};
  }
})

Ideas.allow({
  insert(userId, idea) {
    return userId && idea.owner === userId;
  },
  update(userId, idea, fields, modifier) {
    return userId && idea.owner === userId;
  },
  remove(userId, idea) {
    return userId && idea.owner === userId;
  }
});