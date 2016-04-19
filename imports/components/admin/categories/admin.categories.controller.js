import angularMeteor from 'angular-meteor';
import { Categories } from '../../../api/categories';

export class AdminCategoriesController {
  constructor($scope, $reactive, $rootScope, Notification) {
    'ngInject';

    this.Notification = Notification;

    $reactive(this).attach($scope);

    this.subscribe('categories');

    this.helpers({
      categories() {
        return Categories.find({});
      }
    });

    $rootScope.$on('category:selected', this.onCategorySelected.bind(this));
  }

  createCategory(category) {
    console.log(category);
    this.category.owner = Meteor.userId;
    Meteor.call('category:add', category, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('Category created');
      this.category = {};
    })
  }

  saveCategory(category) {
    Meteor.call('category:update', category._id, _.omit(category, '_id', '$$hashKey'), (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('Category saved');
    });
  }

  onCategorySelected(ev, category) {
    this.selectedCategory = category;
  }

}