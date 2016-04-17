import angularMeteor from 'angular-meteor';

export class IdeaController {
  constructor($scope, $reactive) {
    'ngInject';

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
    Meteor.call('idea:remove', this.idea);
  }

  likeIdea() {
    Meteor.call('idea:like', this.idea._id);
  }
}