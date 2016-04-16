import { Mongo } from 'meteor/mongo';
import { Categories } from '../categories'

export const Ideas = new Mongo.Collection('ideas');

Ideas.helpers({
  ideaOwner() {
    return this.owner ? Meteor.users.findOne({ _id: this.owner }) : {};
  },
  ideaCategory() {
    console.log(this.category ? Categories.findOne({ _id: this.category }) : {})
    return this.category ? Categories.findOne({ _id: this.category }) : {};
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