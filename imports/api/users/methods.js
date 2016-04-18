import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';

function setIsAdmin(user, isAdmin) {
  if(!Meteor.user().isAdmin) {
    throw new Meteor.Error(403, 'Admin level required for this operation');
  }

  Meteor.users.update(user._id, {
    $set: {
      isAdmin: isAdmin
    }
  })
}

Meteor.methods({
  'user:setIsAdmin': setIsAdmin
});