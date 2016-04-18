import { Mongo } from 'meteor/mongo';
import { _ } from 'lodash';

export const Categories = new Mongo.Collection('categories');

Categories.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.slug = doc.slug || _.kebabCase(doc.name);
});

Categories.before.update(function (userId, doc, fields, modifier) {
  modifier = {
    $set: modifier.$set || {}
  };
  modifier.$set.modifiedAt = Date.now();
  modifier.$set.slug = doc.slug || _.kebabCase(doc.name);
});

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