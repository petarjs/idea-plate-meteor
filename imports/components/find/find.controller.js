import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';
import { Categories } from '../../api/categories';

export class FindController {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    this.category = $stateParams.category;

    $reactive(this).attach($scope);

    this.subscribe('ideas', angular.noop, { category: this.category });

    this.helpers({
      ideas() {
        return Ideas.find({});
      },
      categoryBySlug() {
        return Categories.findOne({ slug: this.category })
      }
    });

  }

}