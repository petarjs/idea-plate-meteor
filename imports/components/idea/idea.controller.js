import angularMeteor from 'angular-meteor';

export class IdeaController {
  constructor($scope, $reactive, Notification) {
    'ngInject';

    this.Notification = Notification;
    $reactive(this).attach($scope);

    this.helpers({
      alreadyLiked() {
        return Meteor.user() && Meteor.user().likedIdeas && Meteor.user().likedIdeas.indexOf(this.idea._id) !== -1
      },
      categoryColor() {
        return { 'background-color': this.idea.ideaCategory().color }
      }
    });
  }

  removeIdea() {
    Meteor.call('idea:remove', this.idea, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('Idea removed');
    });
  }

  likeIdea() {
    Meteor.call('idea:like', this.idea._id, (err, data) => {
      if(err) this.Notification.notify(err.reason);
    });
  }

  unlikeIdea() {
    Meteor.call('idea:unlike', this.idea._id, (err, data) => {
      if(err) this.Notification.notify(err.reason);
    });
  }
}