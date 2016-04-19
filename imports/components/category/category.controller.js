import angularMeteor from 'angular-meteor';
import { Categories } from '../../api/categories';

export class CategoryController {
  constructor($rootScope, Notification) {
    'ngInject';

    this.Notification = Notification;

    this.$rootScope = $rootScope;
  }

  removeCategory(category) {
    Meteor.call('category:remove', category, (err, data) => {
      if(err) this.Notification.notify(err.reason);
      if(!err) this.Notification.notify('Category deleted');
    });
  }

  onSelected() {
    this.$rootScope.$emit('category:selected', this.category);
  }
}