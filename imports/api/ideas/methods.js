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
    return;
  }

  Meteor.users.update({ _id: Meteor.userId() }, {
    $addToSet: { likedIdeas: id }
  });
  Ideas.update(id, { $inc: { likes: 1 } } );
}

Meteor.methods({
  'idea:remove': removeIdea,
  'idea:add': addIdea,
  'idea:update': updateIdea,
  'idea:like': likeIdea,
});