import { Meteor } from 'meteor/meteor';
import { Feed } from './collection';
import _ from 'lodash';

if (Meteor.isServer) {
  /**
   * Return the feed for a user.
   * If we're showing the feed for the currently logged in user, 
   * show him both his feed and of those he followed, 
   * else only requested user's feed.
   * @param  {Object} user)         id of the user who's feed we're viewing
   */
  Meteor.publish('feed', function(userId) {
    let query = {};

    if(userId === this.userId) {
      let user = Meteor.users.findOne({ _id: userId })
      let feedUsers = _.concat(_.compact(user.following || []), this.userId);
      query = {
        user: { $in: feedUsers }
      }

      return Feed.find(query);
    } else {
      return Feed.find({ user: userId })
    }
  })
}