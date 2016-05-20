import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Accounts } from 'meteor/accounts-base';

import { name as App } from '../imports/components/app';
import { name as Navigation } from '../imports/components/navigation/navigation';
import { name as Home } from '../imports/components/home/home';
import { name as Layout } from '../imports/components/layout/layout';
import { name as Create } from '../imports/components/create/create';
import { name as Find } from '../imports/components/find/find';
import { name as FindUsers } from '../imports/components/find-users/find-users';
import { name as Idea } from '../imports/components/idea/idea';
import { name as Category } from '../imports/components/category/category';
import { name as User } from '../imports/components/user/user';
import { name as HeaderSmall } from '../imports/components/header-small/header-small';
import { name as ImageUpload } from '../imports/components/image-upload/image-upload';
import { name as ColorPicker } from '../imports/components/color-picker/color-picker';
import { name as IconPicker } from '../imports/components/icon-picker/icon-picker';
import { name as ShowColor } from '../imports/components/show-color/show-color';
import { name as ShowIcon } from '../imports/components/show-icon/show-icon';
import { name as Liked } from '../imports/components/liked/liked';
import { name as Feed } from '../imports/components/feed/feed';
import { name as UserProfile } from '../imports/components/user-profile/user-profile';
import { name as MyIdeas } from '../imports/components/my-ideas/my-ideas';

import { name as Admin } from '../imports/components/admin/admin';
import { name as AdminCategories } from '../imports/components/admin/categories/admin.categories';
import { name as AdminUsers } from '../imports/components/admin/users/admin.users';

import { name as Notification } from '../imports/core/notification';
import { name as Iconate} from '../imports/core/iconate'
import { name as TrustHtml} from '../imports/core/trust-html'

angular
  .module('ideaPlate', [
    // Libs
    angularMeteor,
    uiRouter,
    'accounts.ui',
    'ngSanitize',

    // Core
    Notification,
    Iconate,
    TrustHtml,

    // Components
    App,
    Navigation,
    Layout,
    Home,
    Create,
    Find,
    FindUsers,
    Idea,
    Category,
    User,
    HeaderSmall,
    ImageUpload,
    ColorPicker,
    IconPicker,
    ShowColor,
    ShowIcon,
    Liked,
    Feed,
    UserProfile,
    MyIdeas,

    Admin,
    AdminCategories,
    AdminUsers,
  ])
  .config(config)
  .run(run);
 
function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

function run($rootScope, $state, $location) {
  'ngInject';

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  MDSnackbars.init();

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED' || error === 'ADMIN_REQUIRED') {
      $state.go('home');
    }
  });
}