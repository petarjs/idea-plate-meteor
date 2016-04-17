import { Meteor } from 'meteor/meteor';
 
import { Ideas } from './collection';

if (Meteor.isServer) {
  Meteor.publish('ideas', () => {
    return Ideas.find({});
  })

  Meteor.publish('likedIdeas', function() {
    let liked = this.userId ? Meteor.users.findOne(this.userId).likedIdeas : {};
    return Ideas.find({ _id: { $in: liked } });
  })
}