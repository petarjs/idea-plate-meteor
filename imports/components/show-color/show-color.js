import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './show-color.html';
 
const name = 'show-color';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component('showColor', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: 'showColor',
  bindings: {
    color: '='
  }
});