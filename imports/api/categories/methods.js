import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
 
import { Categories } from './collection';

function removeCategory(category) {
  Categories.remove(category._id);
}

function addCategory(category) {
  Categories.insert(category);
}

function updateCategory(id, category) {
  console.log(category)
  Categories.update(id, category);
}

Meteor.methods({
  'category:remove': removeCategory,
  'category:add': addCategory,
  'category:update': updateCategory,
});