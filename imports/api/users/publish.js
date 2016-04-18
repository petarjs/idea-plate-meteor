import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';
import { userFields } from './fields';

if (Meteor.isServer) {
  Meteor.publish('admin:users', function() {
    const user = Users.findOne(this.userId);
    return Users.find({}, userFields);
  })

  Meteor.publish('users:all', () => {
    return Meteor.users.find({}, userFields);
  });

  Meteor.publish('users:search', (q) => {
    console.log(Users.find({
      'emails.0.address': {
        $regex: `.*${q}.*`,
        $options : 'i'
      }
    }, userFields).fetch())
    return Users.find({
      'emails.0.address': {
        $regex: `.*${q}.*`,
        $options : 'i'
      }
    }, userFields)
  })
}