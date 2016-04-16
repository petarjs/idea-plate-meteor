import { Meteor } from 'meteor/meteor';
 
import { Categories } from './collection';

if (Meteor.isServer) {
  Meteor.publish('categories', () => {
    return Categories.find({});
  })
}