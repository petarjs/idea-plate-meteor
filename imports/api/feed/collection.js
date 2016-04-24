import { Mongo } from 'meteor/mongo';

export const Feed = new Mongo.Collection('feed');

Feed.helpers({
})

Feed.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.description = 'User did something!!! This is a feed object!';
});

Feed.allow({
  insert(userId, feed) {
    return true;
    // return userId && feed.owner === userId;
  },
  update(userId, feed, fields, modifier) {
    // can't update a feed
    return false;
    // return userId && feed.owner === userId;
  },
  remove(userId, feed) {
    // can't remove a feed
    return false;
    // return userId && feed.owner === userId;
  }
});

const FeedSchema = new SimpleSchema({
  user: {
    type: String,
    label: 'User',
    optional: false
  },
  event: {
    type: String,
    label: 'Event',
    optional: false
  },
  // Target - id of an entity that was the object of this update
  // (idea, user)
  target: {
    type: String,
    label: 'Target',
    optional: false
  }
});

Feed.attachSchema(FeedSchema);