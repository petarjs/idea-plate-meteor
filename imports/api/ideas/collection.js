import { Mongo } from 'meteor/mongo';
import { Categories } from '../categories'

export const Ideas = new Mongo.Collection('ideas');

Ideas.helpers({
  ideaOwner() {
    return this.owner ? Meteor.users.findOne({ _id: this.owner }, {fields:{emails: 1, profile: 1}}) : {};
  },
  ideaCategory() {
    return this.category ? Categories.findOne({ _id: this.category }) : {};
  }
})

Ideas.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.owner = Meteor.userId();
});

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

const IdeaSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    optional: false
  },
  description: {
    type: String,
    label: 'Description',
    optional: false
  },
  category: {
    type: String,
    label: 'Category',
    optional: false
  },
  image: {
    type: String,
    label: 'Image',
    optional: false
  },
  likes: {
    type: Number,
    label: 'Likes',
    defaultValue: 0
  }
});

Ideas.attachSchema(IdeaSchema);