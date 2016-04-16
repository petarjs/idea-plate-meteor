import angularMeteor from 'angular-meteor';
import { Categories } from '../../api/categories';

export class CategoryController {
  constructor($rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;
  }

  removeCategory(category) {
    Meteor.call('category:remove', category);
  }

  onSelected() {
    this.$rootScope.$emit('category:selected', this.category);
  }
}