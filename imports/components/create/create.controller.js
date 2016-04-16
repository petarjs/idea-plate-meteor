import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';

export class CreateController {
  constructor($rootScope) {
    'ngInject';

    console.log('create')

    this.offImageChanged = $rootScope.$on('create-idea:image:changed', ($ev, base64) => this.setIdeaImage(base64));
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