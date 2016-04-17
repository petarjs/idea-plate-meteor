import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';

export class LikedController {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('likedIdeas');

    this.helpers({
      likedIdeas() {
        return Ideas.find({});
      }
    });
  }

}