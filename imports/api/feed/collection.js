import { Mongo } from 'meteor/mongo';
import { EventTypes } from './event-types'
import { EventDescriptions } from './event-descriptions'
import { Ideas } from '../ideas';
import { Users } from '../users';

export const Feed = new Mongo.Collection('feed');

Feed.helpers({
})

Feed.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  if(EventDescriptions[doc.event]) {
    doc.description = EventDescriptions[doc.event].replace(':username', Meteor.user()._id);

    if(doc.description.includes(':idea')) {
      doc.description = doc.description.replace(':idea', Ideas.findOne({ _id: doc.target }).title);
    }
    
    if(doc.description.includes(':followedUser')) {
      doc.description = doc.description.replace(':followedUser', Users.findOne({ _id: doc.target })._id);
    }
  }
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