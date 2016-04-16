import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');

Categories.allow({
  insert(userId, category) {
    return userId && category.owner === userId;
  },
  update(userId, category, fields, modifier) {
    return userId && category.owner === userId;
  },
  remove(userId, category) {
    return userId && category.owner === userId;
  }
});