import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';
import { userFields } from './fields';

if (Meteor.isServer) {
  // Publish Current User with additional fields
  Meteor.publish(null, function() {
    if (this.userId) {
      return Meteor.users.find(
        {_id: this.userId},
        userFields);
    } else {
      return null;
    }
  });

  Meteor.publish('admin:users', function() {
    const user = Users.findOne(this.userId);
    return Users.find({}, userFields);
  })

  Meteor.publish('users:all', () => {
    return Meteor.users.find({}, userFields);
  });

  Meteor.publish('users:search', (q) => {
    return Users.find({
      'emails.0.address': {
        $regex: `.*${q}.*`,
        $options : 'i'
      }
    }, userFields)
  })

  Meteor.publish('users:profile', (user) => {
    let userObj = Users.findOne({ _id: user });

    if(!userObj) {
      return;
    }

    return Users.find({
      _id: { $in: _.filter(userObj.following, Boolean).concat(userObj._id) }
    }, userFields)
  })

}