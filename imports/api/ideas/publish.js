import { Meteor } from 'meteor/meteor';
 
import { Ideas } from './collection';
import { Categories } from '../categories';

if (Meteor.isServer) {
  Meteor.publish('ideas', (opts) => {
    let query = {};
    
    if(opts) {
      let categoryObj = Categories.findOne({ slug: opts.category })
      if(!categoryObj) {
        return Meteor.Error('category does not exist');
      }
      query.category = { $eq: categoryObj._id };
    }

    return Ideas.find(query);
  })

  Meteor.publish('likedIdeas', function() {
    let liked = this.userId ? Meteor.users.findOne(this.userId).likedIdeas : {};
    return Ideas.find({ _id: { $in: liked } });
  })
}