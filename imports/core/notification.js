import angularMeteor from 'angular-meteor';

class Notification {
  constructor() {
    'ngInject';
  }

  notify(text) {
    MDSnackbars.show({
      text: text,
      animation: 'slideup',
      toast: true,
      align: 'right'
    });
  }
}

export default angular.module('notification', [
  angularMeteor
]).service('Notification', Notification);