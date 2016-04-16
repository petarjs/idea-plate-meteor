import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './header-small.html';
 
const name = 'header-small';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component('headerSmall', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name
});