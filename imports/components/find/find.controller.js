import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';

export class FindController {
  constructor($scope, $reactive) {
    'ngInject';

    console.log('find')

    $reactive(this).attach($scope);

    this.subscribe('ideas');

    this.helpers({
      ideas() {
        return Ideas.find({});
      }
    });
  }

}