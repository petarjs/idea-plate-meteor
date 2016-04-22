import angularMeteor from 'angular-meteor';

export class IdeaController {
  constructor($scope, $reactive, $timeout, Notification, Iconate) {
    'ngInject';

    this.Notification = Notification;
    this.Iconate = Iconate;
    this.$timeout = $timeout;

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
    let op = this.getReactively('alreadyLiked') ? 'idea:unlike' : 'idea:like';
    Meteor.call(op, this.idea._id, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) {
        this.$timeout(() => {
          if(op === 'idea:unlike') {
            this.Iconate.morph('heart', 'heart-o')
          } else {
            this.Iconate.morph('heart-o', 'heart')
          }
        })
      }
    });
  }
}