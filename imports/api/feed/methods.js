import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Feed } from './collection';

function addFeed(feed) {
  Feed.insert(feed);
}

Meteor.methods({
  'feed:add': addFeed,
});