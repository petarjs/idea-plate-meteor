import { Meteor } from 'meteor/meteor';
import { Feed } from './collection';
import _ from 'lodash';

if (Meteor.isServer) {
  Meteor.publish('feed', function(opts) {
    let query = {};

    if(this.userId) {
      let user = Meteor.users.findOne({ _id: this.userId })
      let feedUsers = _.concat(_.compact(user.following || []), this.userId);
      query = {
        user: { $in: feedUsers }
      }

      return Feed.find(query);
    } else {
      return [];
    }
  })
}