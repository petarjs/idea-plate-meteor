import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';
import { Categories } from '../../api/categories';

export class CreateController {
  constructor($rootScope, $scope, $reactive, $timeout, Notification) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.Notification = Notification;

    this.offImageChanged = $rootScope.$on('image-upload:image:changed', ($ev, base64) => this.setIdeaImage(base64));
    this.idea = {};

    $reactive(this).attach($scope);
    this.subscribe('categories');
    this.helpers({
      categories() {
        return Categories.find({});
      },
    });
  }

  setCategoryColor() {
    let c = Categories.findOne({ _id: this.idea.category });
    if(c) {
      this.categoryColor = { 'background-color': c.color };
    }
  }

  createIdea(idea) {
    console.log(this.idea);
    Meteor.call('idea:add', this.idea, (err, data) => {
      this.$timeout(() => {
        this.idea = {};
        this.categoryColor = {};
        this.$rootScope.$emit('image-upload:image:reset');
      })

      this.Notification.notify(err ? err.reason : 'Successfully created an Idea!');
    });
  }

  setIdeaImage(base64) {
    this.idea.image = base64;
  }

  $onDestroy() {
    this.offImageChanged();
  }
}