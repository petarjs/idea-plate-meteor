import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';
import { Categories } from '../../api/categories';

export class CreateController {
  constructor($rootScope, $scope, $reactive) {
    'ngInject';

    console.log('create')

    this.offImageChanged = $rootScope.$on('create-idea:image:changed', ($ev, base64) => this.setIdeaImage(base64));

    $reactive(this).attach($scope);
    this.subscribe('categories');
    this.helpers({
      categories() {
        return Categories.find({});
      }
    });
  }

  createIdea(idea) {
    this.idea.owner = Meteor.userId();
    this.createdAt = Date.now();
    console.log(this.idea);
    Meteor.call('idea:add', this.idea);
    this.idea = {};
  }

  setIdeaImage(base64) {
    this.idea.image = base64;
  }

  $onDestroy() {
    this.offImageChanged();
  }
}