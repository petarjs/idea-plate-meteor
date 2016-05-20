import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './show-icon.html';
 
const name = 'show-icon';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component('showIcon', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: 'showIcon',
  bindings: {
    icon: '='
  }
});