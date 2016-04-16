import angularMeteor from 'angular-meteor';

export class IdeaController {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
    });
  }

  removeIdea() {
    Meteor.call('idea:remove', this.idea);
  }
}