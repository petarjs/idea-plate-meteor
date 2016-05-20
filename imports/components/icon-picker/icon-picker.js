import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './icon-picker.html';

const name = 'icon-picker';

export default angular.module(name, [
  angularMeteor
]).directive('iconPicker', () => {
  return {
    templateUrl: `imports/components/${name}/${name}.html`,
    controllerAs: 'iconPicker',
    bindToController: true,
    controller: angular.noop,
    scope: {
      icon: '='
    }
  }
});