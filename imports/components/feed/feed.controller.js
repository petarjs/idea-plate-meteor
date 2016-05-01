import angularMeteor from 'angular-meteor';

export class FeedController {
  constructor($rootScope, Notification, TrustHtml) {
    'ngInject';

    this.Notification = Notification;
    this.TrustHtml = TrustHtml;

    this.$rootScope = $rootScope;
  }

  trustAsHtml(string) {
    return this.TrustHtml.trustAsHtml(string, this.$scope);
  }
}