import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './layout.html';
 
const name = 'layout';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: name
});