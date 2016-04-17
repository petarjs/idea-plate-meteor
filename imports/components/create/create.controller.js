import angularMeteor from 'angular-meteor';
import { Ideas } from '../../api/ideas';
import { Categories } from '../../api/categories';

export class CreateController {
  constructor($rootScope, $scope, $reactive) {
    'ngInject';

    console.log('create')

    this.offImageChanged = $rootScope.$on('create-idea:image:changed', ($ev, base64) => this.setIdeaImage(base64));
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
      if(err) {
        MDSnackbars.show({
          text: err.reason,
          animation: 'slideup',
          toast: true,
          align: 'right'
        });
      }
    });
    this.idea = {};
  }

  setIdeaImage(base64) {
    this.idea.image = base64;
  }

  $onDestroy() {
    this.offImageChanged();
  }
}