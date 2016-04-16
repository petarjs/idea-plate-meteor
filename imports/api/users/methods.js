import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';

function setIsAdmin(user, isAdmin) {
  Meteor.users.update(user._id, {
    $set: {
      isAdmin: isAdmin
    }
  })
}

Meteor.methods({
  'user:setIsAdmin': setIsAdmin
});