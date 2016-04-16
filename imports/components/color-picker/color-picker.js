import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './color-picker.html';

const name = 'color-picker';

export default angular.module(name, [
  angularMeteor
]).directive('colorPicker', () => {
  return {
    templateUrl: `imports/components/${name}/${name}.html`,
    controllerAs: 'colorPicker',
    bindToController: true,
    controller: angular.noop,
    scope: {
      color: '='
    }
  }
});