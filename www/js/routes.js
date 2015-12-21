angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })




    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })





    .state('signup', {
      url: '/page6',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })





    .state('groupEntries', {
      url: '/groupEntries/:groupId',
      templateUrl: 'templates/groupEntries.html',
      controller: 'groupEntriesCtrl'
    })





    .state('tabsController.myGroups', {
      url: '/index',
      views: {
        'tab1': {
          templateUrl: 'templates/myGroups.html',
          controller: 'myGroupsCtrl'
        }
      }
    })





    .state('tabsController.addGroup', {
      url: '/addGroup',
      views: {
        'tab2': {
          templateUrl: 'templates/addGroup.html',
          controller: 'addGroupCtrl'
        }
      }
    })





    .state('tabsController.myAccount', {
      url: '/account',
      views: {
        'tab3': {
          templateUrl: 'templates/myAccount.html',
          controller: 'myAccountCtrl'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});
