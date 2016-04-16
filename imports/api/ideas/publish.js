import { Meteor } from 'meteor/meteor';
 
import { Ideas } from './collection';

if (Meteor.isServer) {
  Meteor.publish('ideas', () => {
    return Ideas.find({});
  })
}