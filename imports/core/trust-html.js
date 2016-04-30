import angularMeteor from 'angular-meteor';

class TrustHtml {
  constructor($sce, $compile) {
    'ngInject';

    this.$sce = $sce;
    this.$compile = $compile;
  }

  trustAsHtml(string) {
    return this.$sce.trustAsHtml(string);
  }
}

export default angular.module('trust-html', [
  angularMeteor
]).service('TrustHtml', TrustHtml);