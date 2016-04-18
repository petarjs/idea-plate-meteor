import angularMeteor from 'angular-meteor';
import { Categories } from '../../api/categories';

export class NavigationController {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('categories');

    this.helpers({
      categories() {
        return Categories.find({});
      }
    });
  }
}