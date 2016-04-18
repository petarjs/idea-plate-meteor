import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Users } from './collection';
import { userFields } from './fields';

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

function follow(opts) {
  if(!opts.user) {
    throw new Meteor.Error(400, 'Missing user')
  }

  if(opts.user._id === Meteor.userId()) {
    throw new Meteor.Error(400, 'User cannot follow himself')
  }
  
  Users.update({ _id: Meteor.userId() }, {
    $addToSet: {
      following: opts.user._id
    }
  });
}

Meteor.methods({
  'user:setIsAdmin': setIsAdmin,
  'user:follow': follow,
});