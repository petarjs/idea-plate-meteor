import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';

const userFields = {fields: {emails: 1, profile: 1, isAdmin: 1, likedIdeas: 1}};

if (Meteor.isServer) {
  Meteor.publish('admin:users', function() {
    const user = Users.findOne(this.userId);
    return Users.find({}, userFields);
  })

  Meteor.publish(null, function() {
    return Meteor.users.find({}, userFields);
  });
}