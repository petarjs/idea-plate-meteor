import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Ideas } from './collection';

function removeIdea(idea) {
  Ideas.remove(idea._id);
}

function addIdea(idea) {
  Ideas.insert(idea);
}

function updateIdea(id, idea) {
  Ideas.update(id, idea);
}

function likeIdea(id) {
  if(Meteor.user().likedIdeas && Meteor.user().likedIdeas.indexOf(id) !== -1) {
    throw new Meteor.Error(400, 'You already liked this idea')
  }

  Meteor.users.update({ _id: Meteor.userId() }, {
    $addToSet: { likedIdeas: id }
  });

  Ideas.update(id, { $inc: { likes: 1 } } );
}

function unlikeIdea(id) {
  if(Meteor.user().likedIdeas && Meteor.user().likedIdeas.indexOf(id) === -1) {
    throw new Meteor.Error(400, 'You did not like this idea')
  }

  Meteor.users.update({ _id: Meteor.userId() }, {
    $pull: { likedIdeas: id }
  });

  Ideas.update(id, { $inc: { likes: -1 } } );
}

Meteor.methods({
  'idea:remove': removeIdea,
  'idea:add': addIdea,
  'idea:update': updateIdea,
  'idea:like': likeIdea,
  'idea:unlike': unlikeIdea,
});