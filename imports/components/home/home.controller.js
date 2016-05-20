import angularMeteor from 'angular-meteor';
import { Categories } from '../../api/categories';

export class HomeController {
  constructor($scope, $reactive) {
    'ngInject';

    this.showMenu = true;

    $reactive(this).attach($scope);

    this.subscribe('categories');

    this.helpers({
      categories() {
        return Categories.find({});
      }
    });
  }
}