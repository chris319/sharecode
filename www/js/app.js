// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabsController.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.myGroups', {
    url: '/myGroups',
    views: {
      'tab-myGroups': {
        templateUrl: 'templates/tab-myGroups.html',
        controller: 'MyGroupsCtrl',
        resolve: {
          groupList:
            function($http) {
            return $http.get('http://schlagmich.net:8080/api/v1/subscriptions/0d492660-a10e-11e5-8eda-73e5ccce3d45');
          }
        }
      }
  }
  })
  .state('tab.addGroup', {
      url: '/addGroup',
      views: {
        'tab-addGroup': {
          templateUrl: 'templates/tab-addGroup.html',
          controller: 'AddGroupCtrl'
        }
      }
    })
    .state('tab.groupEntries', {
      url: '/groupEntries/:groupId',
      views: {
        'tab-myGroups': {
          templateUrl: 'templates/groupEntries.html',
          controller: 'GroupEntriesCtrl'
        }
      }
    })
    .state('tab.myAccount', {
      url: '/myAccount',
      views: {
        'tab-myAccount': {
          templateUrl: 'templates/tab-myAccount.html',
          controller: 'MyAccountCtrl'
        }
      }
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/myGroups');

});
