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

Meteor.methods({
  'idea:remove': removeIdea,
  'idea:add': addIdea,
  'idea:update': updateIdea,
});